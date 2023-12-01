import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, map, switchMap, throwError } from 'rxjs';
import { Article } from 'src/app/models/articles.model';
import { CardPost } from 'src/app/models/card-post';

@Injectable({
  providedIn: 'root'
})
export class CrudArticlesService {
  private articlesCollection: AngularFirestoreCollection<Article>;

  constructor(private afs: AngularFirestore) {
    this.articlesCollection = afs.collection<Article>('articles');
  }

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



  //REED

  getArticleById(articleId: string): Observable<Article | null> {
    const articleDoc = this.afs.collection('articles').doc(articleId);
  
    return articleDoc.get().pipe(
      map((snapshot) => {
        if (snapshot.exists) {
          const data = snapshot.data() as Article;
          return { ...data, id: articleId };
        } else {
          return null; // Retorna null si no se encuentra el artículo
        }
      }),
      catchError((error) => {
        console.error('Error al obtener el artículo por ID:', error);
        return throwError(error);
      })
    );
  }

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
      carrusel: article.carrusel
    };
  }

  

  

}

