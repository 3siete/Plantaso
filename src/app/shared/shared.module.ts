import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardPostComponent } from './components/card-post/card-post.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
