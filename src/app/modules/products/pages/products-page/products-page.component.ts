import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardShop } from 'src/app/models/card-shop';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';
import { CrudProductsService } from 'src/app/modules/admin/services/crud-products.service';
import { MappingService } from 'src/app/modules/articles/services/mapping.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
cardShops:CardShop[] = [];
constructor(
  private router: Router,
  private crudService: CrudProductsService,
  private slugMap: MappingService
){
  this.crudService.getCardShops().subscribe(
    (cardShop:CardShop[])=>{
      this.cardShops = cardShop
    },
    error=>{
      console.error(error)
    }
  )
}
seeMore(productId:string){
  this.crudService.getSlugForProduct(productId).subscribe(

    slug=>{
      if(slug){
        this.router.navigate(['/producto',slug])
      }else {
        console.warn(`No se encontró slug para el productId: ${productId}`);
        // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
      }
    },
    error => {
      console.error('Error al obtener el slug:', error);
      // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
    }
  )
}
}
