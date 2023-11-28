import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Article } from 'src/app/models/articles.model';

@Injectable({
  providedIn: 'root'
})
export class CrudArticlesService {

  constructor(
    private afs: AngularFirestore,
    private articlesCollection: AngularFirestoreCollection<Article>) { }



}
