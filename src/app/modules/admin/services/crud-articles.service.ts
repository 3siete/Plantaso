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

  getArticleBySlug(slug: string): Observable<Article | null> {
    // Asumiendo que 'slug' es un campo en tus documentos de 'articles'
    const articlesCollection = this.afs.collection<Article>('articles', ref => ref.where('slug', '==', slug));
  
    return articlesCollection.get().pipe(
      map(querySnapshot => {
        let articleData = null;
  
        querySnapshot.forEach(doc => {
          if (doc.exists) {
            const data = doc.data();
            articleData = { ...data, id: doc.id }; // Agrega el ID del documento
          }
        });
  
        return articleData; // Retorna el artículo encontrado o null
      }),
      catchError((error) => {
        console.error('Error al obtener el artículo por slug:', error);
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
    };
  }


//UPDATE
updateArticle(articleId: string, article: Article): Observable<void> {
  return from(this.afs.doc<Article>(`articles/${articleId}`).update(article)).pipe(
    catchError((error) => {
      console.error('Error al actualizar el artículo completo', error);
      return throwError(error);
    })
  );
}

//DELETE
deleteArticle(articleId: string): Observable<void> {
  return from(this.afs.doc<Article>(`articles/${articleId}`).delete()).pipe(
    catchError((error) => {
      console.error('Error al eliminar el artículo', error);
      return throwError(error);
    })
  );
}


}

