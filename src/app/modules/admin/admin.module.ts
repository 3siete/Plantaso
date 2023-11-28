import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CreateComponent } from './components/articles-components/create/create.component';
import { UpdateComponent } from './components/articles-components/update/update.component';
import { DeleteComponent } from './components/articles-components/delete/delete.component';

//primeng
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    //firebase
    AngularFireModule,
    AngularFirestoreModule,

    //primeng
    DialogModule
  ]
})
export class AdminModule { }
