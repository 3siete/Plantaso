import { Component, Input } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';
import { debounceTime, Observable } from 'rxjs';

@Component({
  selector: 'app-card-post-carr',
  templateUrl: './card-post-carr.component.html',
  styleUrls: ['./card-post-carr.component.css']
})
export class CardPostCarrComponent {
  

  constructor(private crud: CrudArticlesService){

  }

  productos$!: Observable<CardPost[]>;
  ngOnInit(): void {
  this.productos$ = this.crud.getCardPosts();
  console.log(this.productos$)
 }
}
