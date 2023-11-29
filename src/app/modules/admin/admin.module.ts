import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpeedDialModule } from 'primeng/speeddial';
import { DialogModule } from 'primeng/dialog';


import { CreateArticleButtonComponent } from './articles-components/create-article-button/create-article-button.component';


@NgModule({
  declarations: [
  CreateArticleButtonComponent
  ],
  imports: [
    CommonModule,
    SpeedDialModule,
    DialogModule,

    ReactiveFormsModule,
    FormsModule,


  ],
  exports:[
    CreateArticleButtonComponent
  ]

})
export class AdminModule { }