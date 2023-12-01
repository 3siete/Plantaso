// Importaciones necesarias de Angular, Firebase y RxJS
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, map, of, switchMap, throwError } from 'rxjs';
import { Article } from 'src/app/models/articles.model';
import { CardPost } from 'src/app/models/card-post';

// Decorador que marca la clase como un servicio que puede ser inyectado
@Injectable({
  providedIn: 'root'
})
export class CrudArticlesService {
  // Referencia a la colección de artículos en Firestore
  private articlesCollection: AngularFirestoreCollection<Article>;

  // Constructor para inyectar AngularFirestore
  constructor(private afs: AngularFirestore) {
    // Inicializar la colección de artículos
    this.articlesCollection = afs.collection<Article>('articles');
  }

  // Método CREATE para crear un nuevo artículo
  createArticle(article: Article): Observable<void> {
    // Generar un nuevo ID para el artículo
    const idArticle = this.afs.createId();
    article.articleId = idArticle;
    // Generar un slug a partir del título del artículo
    article.slug = this.slugify(article.title);

    // Agregar el artículo a la colección y manejar errores
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

  // Método auxiliar para generar un slug a partir de un texto
  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')          // Reemplaza espacios con guiones
      .replace(/[^\w-]+/g, '');    // Elimina caracteres no alfanuméricos excepto guiones
  }

  // Método READ para obtener un artículo por ID
  getArticleById(id: string): Observable<Article | null> {
    return this.afs.doc<Article>(`articles/${id}`).valueChanges().pipe(
      map(article => article ? { ...article, id } : null),
      catchError((error) => {
        console.error('Error al obtener el artículo por ID:', error);
        return throwError(error);
      })
    );
  }

  // Método READ para obtener el slug de un artículo
  getSlugForArticle(articleId: string): Observable<string | null> {
    return this.afs.doc<Article>(`articles/${articleId}`).valueChanges().pipe(
      map(article => article ? article.slug || null : null),
      catchError((error) => {
        console.error('Error al obtener el slug para el artículo:', error);
        return throwError(error);
      })
    );
  }

  // Método READ para obtener todos los artículos como CardPosts
  getCardPosts(): Observable<CardPost[]> {
    return this.articlesCollection.valueChanges({ idField: 'id' }).pipe(
      map(articles => articles.map(article => this.mapToCardPost(article))),
      catchError((error) => {
        console.error('Error al obtener los artículos (observable):', error);
        return throwError(error);
      })
    );
  }

  // Método auxiliar para mapear un artículo a un CardPost
  private mapToCardPost(article: Article): CardPost {
    return {
      articleId: article.articleId,
      slug: article.slug,
      title: article.title,
      subtitle: article.subtitle,
      description: article.description,
      imgURL: article.imgURL,
      alt: article.alt,
      carrusel: article.carrusel,
    };
  }

  // Método UPDATE para actualizar un artículo
  updateArticle(articleId: string, updatedArticle: Article): Observable<any> {
    return this.afs.doc<Article>(`articles/${articleId}`).valueChanges().pipe(
      switchMap((existingArticle: Article | undefined) => {
        if (!existingArticle) {
          console.warn(`No se encontró el artículo con ID: ${articleId}`);
          return of(); // Devolver un observable vacío si no se encuentra el artículo
        }
        // Generar un nuevo slug si el título ha cambiado
        const newSlug = updatedArticle.title !== existingArticle.title
          ? this.slugify(updatedArticle.title)
          : existingArticle.slug;

        // Actualizar el artículo con el nuevo slug
        const updatedData: Article = {
          ...updatedArticle,
          slug: newSlug
        };

        // Actualizar el documento con los nuevos datos
        return this.afs.doc<Article>(`articles/${articleId}`).update(updatedData);
      }),
      catchError((error) => {
        console.error('Error al actualizar el artículo:', error);
        return of(); // Devolver un observable vacío o manejar el error
      })
    );
  }

  // Método DELETE para eliminar un artículo
  deleteArticle(articleId: string): Observable<void> {
    return from(this.afs.doc<Article>(`articles/${articleId}`).delete()).pipe(
      catchError((error) => {
        console.error('Error al eliminar el artículo', error);
        return throwError(error);
      })
    );
  }
}
