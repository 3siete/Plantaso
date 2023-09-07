import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    FooterComponent,
    ContainerComponent
  ]
})
export class SharedModule { }
