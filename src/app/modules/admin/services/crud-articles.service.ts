import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Article } from 'src/app/models/articles.model';

@Injectable({
  providedIn: 'root'
})
export class CrudArticlesService {

  constructor(
    private afs: AngularFirestore,
    private articlesCollection: AngularFirestoreCollection) { }



     //CREATE
  createArticle(article: Article): Observable<void> {
    const idArticle = this.afs.createId();
    article.id = idArticle;

    return from(this.articlesCollection.add(article)).pipe(
      switchMap((docRef: DocumentReference<Article>) => {
        // Actualizar el artículo con el ID asignado por Firestore
        return from(docRef.set({ ...article, id: docRef.id }));
      }),
      catchError((error) => {
        console.error('Error desconocido al crear el artículo', error);
        return throwError(error);
      })
    );
  }
}

