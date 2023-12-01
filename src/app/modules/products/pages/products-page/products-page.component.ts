import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardShop } from 'src/app/models/card-shop';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';
import { MappingService } from 'src/app/modules/articles/services/mapping.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
cardShop:CardShop[] = [];
constructor(
  private router: Router,
  private crudService: CrudArticlesService,
  private slugMap: MappingService
){}
}
