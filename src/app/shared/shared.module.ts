import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    FooterComponent,
    ContainerComponent,
    SidebarComponent
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    ContainerComponent
  ]
})
export class SharedModule { }
