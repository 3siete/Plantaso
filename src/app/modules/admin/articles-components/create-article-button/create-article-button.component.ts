// Importa los módulos necesarios desde Angular Core para la creación de componentes.
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importa el servicio CrudArticlesService para realizar operaciones CRUD relacionadas con artículos.
import { CrudArticlesService } from '../../services/crud-articles.service';

// Define el componente y sus metadatos.
@Component({
  selector: 'app-create-article-button',
  templateUrl: './create-article-button.component.html',
  styleUrls: ['./create-article-button.component.css']
})
export class CreateArticleButtonComponent {

  // Declara una variable para almacenar el formulario de creación.
  createForm!: FormGroup;

  // Declara una variable booleana para controlar la visibilidad del cuadro de diálogo.
  visible: boolean = false;
  
  // Método para mostrar el cuadro de diálogo.
  showDialog() {
    this.visible = true;  
  }

  // Constructor del componente, se ejecuta al instanciar el componente.
  constructor(private fb: FormBuilder, private crudService: CrudArticlesService) {}

  // Método que se ejecuta después de que Angular inicializa el componente.
  ngOnInit(): void {
    // Inicializa el formulario y define sus campos con validadores.
    this.createForm = this.fb.group({
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
    this.createForm.get('carrusel')?.setValue(event ? 'true' : 'false');
  }
  
  // Método que se ejecuta al enviar el formulario.
  onSubmit() {
    // Obtiene el valor del formulario.
    const value = this.createForm.value;
    
    // Muestra el valor en la consola.
    console.log(value);

    // Oculta el cuadro de diálogo.
    this.visible = false;

    // Llama al servicio para crear un nuevo artículo.
    this.crudService.createArticle(value)
      .subscribe(
        () => {
          alert('Se añadió el artículo correctamente');
        },
        (error) => {
          console.error('Error al añadir un artículo ' + error);
        }
      );
  }
}
