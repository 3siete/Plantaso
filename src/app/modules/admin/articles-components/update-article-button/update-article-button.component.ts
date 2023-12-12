// Importa los módulos necesarios desde Angular Core para la creación de componentes y formularios reactivos.
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importa los módulos y servicios necesarios para la gestión de artículos y navegación.
import { CrudArticlesService } from '../../services/crud-articles.service';
import { Article } from 'src/app/models/articles.model';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

// Define el componente y sus metadatos.
@Component({
  selector: 'app-update-article-button',
  templateUrl: './update-article-button.component.html',
  styleUrls: ['./update-article-button.component.css']
})
export class UpdateArticleButtonComponent {
  // Recibe el ID del artículo a editar como entrada desde el componente padre.
  @Input() articleId!: string;

  // Inicializa el formulario de actualización.
  updateForm!: FormGroup;

  // Bandera para indicar si la aplicación está cargando datos.
  isLoading = false;

  // Bandera para controlar la visibilidad del cuadro de diálogo.
  visible: boolean = false;

  // Bandera para controlar si se está actualizando el formulario.
  updatingForm = false;

  // Subject para gestionar la desuscripción de observables y evitar fugas de memoria.
  private unsubscribe$ = new Subject<void>();
  
  // Método para mostrar el cuadro de diálogo y cargar los datos del artículo para la edición.
  showDialog() {
    this.loadArticleData(this.articleId);
    this.visible = true;  
  }

  // Constructor del componente, se ejecuta al instanciar el componente.
  constructor(
    private fb: FormBuilder,
    private crudService: CrudArticlesService,
    private router: Router
  ) {}

  // Método que se ejecuta después de que Angular inicializa el componente.
  ngOnInit(): void {
    // Inicializa el formulario de actualización y define sus campos con validadores.
    this.updateForm = this.fb.group({
      imgURL: ['', [Validators.required]],
      alt: ['', [Validators.required]],
      title: ['', [Validators.required]],
      subtitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      reproduction: ['', [Validators.required]],
      care: ['', [Validators.required]],
      tips: ['', [Validators.required]],
      characteristic: ['', [Validators.required]],
      pests: ['', [Validators.required]],
      insecticides: ['', [Validators.required]],
      carrusel: ['false', Validators.required]
    });
  }
  
  // Método para actualizar el valor del campo 'carrusel' en el formulario.
  updateCarruselValue(event: any) {
    this.updateForm.get('carrusel')?.setValue(event ? 'true' : 'false');
  }

  // Método que se ejecuta al destruir el componente para evitar posibles fugas de memoria.
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // Método para cargar los datos de un artículo para la edición.
  loadArticleData(articleId: string): void {
    // Indica que la aplicación está cargando datos.
    this.isLoading = true;

    // Llama al servicio para obtener los datos del artículo por ID.
    this.crudService.getArticleById(articleId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        // Callback en caso de éxito.
        (article: Article | null) => {
          if (article) {
            // Desactiva temporalmente el controlador de cambios para evitar actualizaciones innecesarias del formulario.
            this.updatingForm = true;
            // Rellena el formulario con los datos del artículo.
            this.updateForm.patchValue(article);
            // Reactiva el controlador de cambios.
            this.updatingForm = false;
          }
          // Indica que la aplicación ha terminado de cargar datos.
          this.isLoading = false;
        },
        // Callback en caso de error.
        error => {
          console.error('Error loading article', error);
          // Indica que la aplicación ha terminado de cargar datos.
          this.isLoading = false;
        }
      );
  }

  // Método que se ejecuta al enviar el formulario de actualización.
  onSubmit(): void {
    // Verifica si el formulario es válido.
    if (this.updateForm.valid) {
      // Indica que la aplicación está cargando datos.
      this.isLoading = true;
      
      // Obtiene los datos actualizados del formulario.
      const updatedArticle: Article = this.updateForm.value;
      
      // Llama al servicio para actualizar el artículo.
      this.crudService.updateArticle(this.articleId, updatedArticle)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          // Callback en caso de éxito.
          () => {
            console.log('Article updated successfully');
            // Indica que la aplicación ha terminado de cargar datos.
            this.isLoading = false;
            // Navega a la ruta 'articulo'.
            this.router.navigate(['articulo']);
          },
          // Callback en caso de error.
          error => {
            console.error('Error updating article', error);
            // Indica que la aplicación ha terminado de cargar datos.
            this.isLoading = false;
          }
        );
    }
  }
}
