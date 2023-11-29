import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudArticlesService {

  constructor(
    private afs: AngularFirestore,
    private articlesCollection: AngularFirestoreCollection) { }
}
