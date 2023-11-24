import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles.model';
import { CardPost } from 'src/app/models/card-post';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private afs: AngularFirestore,
    private articlesCollection: AngularFirestoreCollection<Article>) {
      this.articlesCollection = afs.collection<Article>('articles');
  }

  //READ
  getCardPost(): Observable<CardPost[]>{
    return this.articlesCollection.valueChanges({ idField: 'id' }).pipe(
      map(articles => articles.map(article => this.mapToCardPost(article))),
      catchError((error) => {
        console.error('Error al obtener los artículos (observable):', error);
        return throwError(error);
      })
    );
  }
  }
}
