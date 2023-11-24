import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, from, throwError } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators'; // mapea valores -> similar a la función de un arreglo
import { Article } from 'src/app/models/articles.model';
import { CardPost } from 'src/app/models/card-post';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private articlesCollection: AngularFirestoreCollection<Article>;

  constructor(private afs: AngularFirestore) {
    this.articlesCollection = afs.collection<Article>('articles');
  }



  //READ
  getCardPosts(): Observable<CardPost[]> {
    return this.articlesCollection.valueChanges({ idField: 'id' }).pipe(
      map(articles => articles.map(article => this.mapToCardPost(article))),
      catchError((error) => {
        console.error('Error al obtener los artículos (observable):', error);
        return throwError(error);
      })
    );
  }
  
  private mapToCardPost(article: Article): CardPost {
    console.log('Mapeando artículo:', article);
    console.log('URL antes de devolverla:', article.imgurl);
  
    return {
      title: article.title,
      subtitle: article.subtitle,
      description: article.description,
      imgurl: article.imgurl,
      alt: article.alt,
    };
  }

}

