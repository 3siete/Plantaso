import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CreateComponent } from './components/articles-components/create/create.component';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule
  ]
})
export class AdminModule { }
