import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { CreateArticleButtonComponent } from './admin/components/create-article-buttom/create-article-button.component';


//primeng

import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticlePageComponent,
    CreateArticleButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ArticlesRoutingModule,
    SharedModule,

   //primeng
    DialogModule
  ],
  exports:[
    CreateArticleButtonComponent
  ]
})
export class ArticlesModule { }
