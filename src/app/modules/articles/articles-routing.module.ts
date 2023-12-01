import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

const routes: Routes = [
  // Ruta principal (sin slug)
  { path: '', component: ArticlesPageComponent },
  // Ruta secundaria con slug
  { path: 'articulo/:articleId', component: ArticlePageComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
