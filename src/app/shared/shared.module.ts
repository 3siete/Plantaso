import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContainerComponent
  ]
})
export class SharedModule { }
