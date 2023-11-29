import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//primeng
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateArticleButtonComponent } from './articles-components/create-article-buttom/create-article-button.component';



@NgModule({
  declarations: [
    CreateArticleButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    //firebase
    AngularFireModule,
    AngularFirestoreModule,

    //primeng
    DialogModule
  ],
  exports: [
    CreateArticleButtonComponent
  ]
})
export class AdminModule { }
