import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  //lazyloading
  {
    path: 'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'home',
    loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
