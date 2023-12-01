import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpeedDialModule } from 'primeng/speeddial';
import { DialogModule } from 'primeng/dialog';

//ARTICULOS
import { CreateArticleButtonComponent } from './articles-components/create-article-button/create-article-button.component';
import { UpdateArticleButtonComponent } from './articles-components/update-article-button/update-article-button.component';
import { DeleteArticleButtonComponent } from './articles-components/delete-article-button/delete-article-button.component';
//PRODUCTOS
import { CreateProductButtonComponent } from './products-components/create-product-button/create-product-button.component';
import { UpdateProductButtonComponent } from './products-components/update-product-button/update-product-button.component';
import { DeleteProductButtonComponent } from './products-components/delete-product-button/delete-product-button.component';


import { InputSwitchModule } from 'primeng/inputswitch';


@NgModule({
  declarations: [
  //ARTICULOS
  CreateArticleButtonComponent,
  UpdateArticleButtonComponent,
  DeleteArticleButtonComponent,

  //PRODUCTOS
  CreateProductButtonComponent,
  UpdateProductButtonComponent,
  DeleteProductButtonComponent
  ],
  imports: [
    CommonModule,
    SpeedDialModule,
    DialogModule,

    ReactiveFormsModule,
    FormsModule,

    InputSwitchModule


  ],
  exports:[
    //ARTICULOS
    CreateArticleButtonComponent,
    UpdateArticleButtonComponent,
    DeleteArticleButtonComponent

  ]

})
export class AdminModule { }