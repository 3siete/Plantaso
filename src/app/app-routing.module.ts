import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazyloading
  {
    path: 'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'',
    loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule),
  },
  {
    path:'/products',
    loadChildren:()=>import('./modules/products/products.module').then(m=>m.ProductsModule),
  },
  {
    path:'/articles',
    loadChildren:()=>import('./modules/articles/articles.module').then(m=>m.ArticlesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
