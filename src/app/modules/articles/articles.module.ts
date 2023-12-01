import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from '../admin/admin.module';


@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticlePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArticlesRoutingModule,
    SharedModule,
    AdminModule
  ]
})
export class ArticlesModule { }