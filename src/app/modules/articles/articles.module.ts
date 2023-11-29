import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DialogModule } from 'primeng/dialog';


//primeng



@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticlePageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    ArticlesRoutingModule,
    SharedModule,


        //firebase
        AngularFireModule,
        AngularFirestoreModule,
    
        //primeng
        DialogModule
    
  ],
  exports:[
  ]
})
export class ArticlesModule { }
