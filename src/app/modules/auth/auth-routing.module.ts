import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';

const routes: Routes = [
//rutas secundarias.
  {path:'iniciarsesion',component:LoginComponent},
  {path:'registrarte',component:RegisterComponent},
  {path: 'login-register', component: LoginRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
