import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

const routes: Routes = [
  //ruta secundaria
  { path: '', component: ArticlesPageComponent },
  {
    path: 'articulo/:nombreArticulo',
    component: ArticlePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
