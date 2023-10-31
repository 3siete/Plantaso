import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';


@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticlePageComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule
  ]
})
export class ArticlesModule { }
