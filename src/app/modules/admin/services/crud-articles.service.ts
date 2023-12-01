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
    article.articleId = idArticle;
    article.slug = this.slugify(article.title); // Agrega el slug durante la creación

    return from(this.articlesCollection.add(article)).pipe(
      switchMap((docRef: DocumentReference<Article>) => {
        // Actualizar el artículo con el ID asignado por Firestore
        return from(docRef.set({ ...article, articleId: docRef.id }));
      }),
      catchError((error) => {
        console.error('Error desconocido al crear el artículo', error);
        return throwError(error);
      })
    );
  }
  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')          // Reemplaza espacios con guiones
      .replace(/[^\w-]+/g, '');    // Elimina caracteres no alfanuméricos excepto guiones
  }



  //REED

  // Búsqueda por ID
  getArticleById(id: string): Observable<Article | null> {
    return this.afs.doc<Article>(`articles/${id}`).valueChanges().pipe(
      map(article => article ? { ...article, id } : null),
      catchError((error) => {
        console.error('Error al obtener el artículo por ID:', error);
        return throwError(error);
      })
    );
  }

  getSlugForArticle(articleId: string): Observable<string | null> {
    return this.afs.doc<Article>(`articles/${articleId}`).valueChanges().pipe(
      map(article => {
        if (article) {
          return article.slug || null;
        } else {
          return null;
        }
      }),
      catchError((error) => {
        console.error('Error al obtener el slug para el artículo:', error);
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
    console.log('URL antes de devolverla:', article.imgURL);
  
    return {
      articleId:article.articleId,
      title: article.title,
      subtitle: article.subtitle,
      description: article.description,
      imgURL: article.imgURL,
      alt: article.alt,
      carrusel:article.carrusel,
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

