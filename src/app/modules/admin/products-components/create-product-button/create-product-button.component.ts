import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product-button',
  templateUrl: './create-product-button.component.html',
  styleUrls: ['./create-product-button.component.css']
})
export class CreateProductButtonComponent {
  createForm!: FormGroup;
  visible: boolean = false;

  constructor(private fb: FormBuilder, private crudService: CrudArticlesService) {}

  ngOnInit(): void {
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

  updateCarruselValue(event: any) {
    this.createForm.get('carrusel')?.setValue(event ? 'true' : 'false');
  }

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    const value = this.createForm.value;
    console.log(value);
    this.visible = false;
    this.crudService.createArticle(value).subscribe(
      () => {
        alert('Se añadió el artículo correctamente');
      },
      (error) => {
        console.error('Error al añadir un artículo ' + error);
      }
    );
  }

}
