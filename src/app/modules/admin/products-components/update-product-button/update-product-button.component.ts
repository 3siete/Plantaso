import { Component } from '@angular/core';

@Component({
  selector: 'app-update-product-button',
  templateUrl: './update-product-button.component.html',
  styleUrls: ['./update-product-button.component.css']
})
export class UpdateProductButtonComponent {
  @Input() productId!: string; // ID del producto a editar
  updateForm!: FormGroup;
  isLoading = false;
  visible: boolean = false;
  updatingForm = false;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private crudService: CrudProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
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

    this.loadProductData(this.productId);
  }

  updateCarruselValue(event: any) {
    this.updateForm.get('carrusel')?.setValue(event ? 'true' : 'false');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadProductData(productId: string): void {
    this.isLoading = true;
    this.crudService.getProductById(productId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (product: Products | null) => {
          if (product) {
            // Desactivar temporalmente el controlador de cambios
            this.updatingForm = true;
            this.updateForm.patchValue(product);
            this.updatingForm = false;
          }
          this.isLoading = false;
        },
        error => {
          console.error('Error loading product', error);
          this.isLoading = false;
        }
      );
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.isLoading = true;
      const updatedProduct: Products = this.updateForm.value;
      this.crudService.updateProduct(this.productId, updatedProduct)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          () => {
            console.log('Product updated successfully');
            this.isLoading = false;
            this.router.navigate(['productos']);
          },
          error => {
            console.error('Error updating product', error);
            this.isLoading = false;
          }
        );
    }
  }

}
