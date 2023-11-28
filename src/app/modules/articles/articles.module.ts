import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { CreateArticleButtomComponent } from './admin/components/create-article-buttom/create-article-button.component';


//primeng

import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticlePageComponent,
    CreateArticleButtomComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ArticlesRoutingModule,
    SharedModule,

   //primeng
    DialogModule
  ]
})
export class ArticlesModule { }
