// Importaciones necesarias de Angular, Firebase y RxJS
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, map, of, switchMap, throwError } from 'rxjs';
import { Article } from 'src/app/models/articles.model'; // Modelo de artículo personalizado
import { CardPost } from 'src/app/models/card-post'; // Modelo de CardPost personalizado

// Decorador que marca la clase como un servicio que puede ser inyectado en otras partes de la aplicación.
@Injectable({
  providedIn: 'root'
})
export class CrudArticlesService {
  // Referencia a la colección de artículos en Firestore. Esto permite realizar operaciones en la colección.
  private articlesCollection: AngularFirestoreCollection<Article>;

  // Constructor para inyectar AngularFirestore, una herramienta para interactuar con Firestore.
  constructor(private afs: AngularFirestore) {
    // Inicializar la colección de artículos en Firestore. 'articles' es el nombre de la colección en Firestore.
    this.articlesCollection = afs.collection<Article>('articles');
  }

  // Método CREATE para crear un nuevo artículo en Firestore.
  createArticle(article: Article): Observable<void> {
    // Generar un nuevo ID para el artículo. Esto asegura que cada artículo tenga un identificador único.
    const idArticle = this.afs.createId();
    article.articleId = idArticle;
    // Generar un slug a partir del título del artículo. Un slug es una versión amigable del título para URLs.
    article.slug = this.slugify(article.title);

    // Agregar el artículo a la colección y manejar errores.
    return from(this.articlesCollection.add(article)).pipe(
      switchMap((docRef: DocumentReference<Article>) => {
        // Actualizar el artículo con el ID asignado por Firestore.
        return from(docRef.set({ ...article, articleId: docRef.id }));
      }),
      catchError((error) => {
        // Manejar y registrar errores en caso de que ocurran durante la creación del artículo.
        console.error('Error desconocido al crear el artículo', error);
        return throwError(error);
      })
    );
  }

  // Método auxiliar para generar un slug a partir de un texto.
  private slugify(text: string): string {
    return text
      .toLowerCase() // Convertir a minúsculas
      .replace(/ /g, '-') // Reemplazar espacios con guiones
      .replace(/[^\w-]+/g, ''); // Eliminar caracteres no alfanuméricos excepto guiones
  }

  // Método READ para obtener un artículo por ID desde Firestore.
  getArticleById(id: string): Observable<Article | null> {
    // Acceder al documento del artículo por su ID y observar cambios en sus valores.
    return this.afs.doc<Article>(`articles/${id}`).valueChanges().pipe(
      map(article => article ? { ...article, id } : null), // Mapear el resultado a un objeto Article o null si no existe.
      catchError((error) => {
        // Manejar y registrar errores en caso de que ocurran al obtener el artículo.
        console.error('Error al obtener el artículo por ID:', error);
        return throwError(error);
      })
    );
  }

  // Método READ para obtener el slug de un artículo desde Firestore.
  getSlugForArticle(articleId: string): Observable<string | null> {
    // Acceder al documento del artículo por su ID y observar cambios en sus valores.
    return this.afs.doc<Article>(`articles/${articleId}`).valueChanges().pipe(
      map(article => article ? article.slug || null : null), // Extraer el slug del artículo o null si no existe.
      catchError((error) => {
        // Manejar y registrar errores en caso de que ocurran al obtener el slug.
        console.error('Error al obtener el slug para el artículo:', error);
        return throwError(error);
      })
    );
  }

  // Método READ para obtener todos los artículos como CardPosts desde Firestore.
  getCardPosts(): Observable<CardPost[]> {
    // Observar cambios en la colección de artículos y mapear cada artículo a un CardPost.
    return this.articlesCollection.valueChanges({ idField: 'id' }).pipe(
      map(articles => articles.map(article => this.mapToCardPost(article))), // Convertir cada artículo a un CardPost.
      catchError((error) => {
        // Manejar y registrar errores en caso de que ocurran al obtener los artículos.
        console.error('Error al obtener los artículos (observable):', error);
        return throwError(error);
      })
    );
  }

  // Método auxiliar para mapear un artículo a un CardPost.
  private mapToCardPost(article: Article): CardPost {
    // Convertir las propiedades del artículo a un formato CardPost.
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

  // Método UPDATE para actualizar un artículo en Firestore.
  updateArticle(articleId: string, updatedArticle: Article): Observable<any> {
    // Acceder al documento del artículo por su ID y observar cambios en sus valores.
    return this.afs.doc<Article>(`articles/${articleId}`).valueChanges().pipe(
      switchMap((existingArticle: Article | undefined) => {
        if (!existingArticle) {
          // Advertir si el artículo no se encuentra y devolver un observable vacío.
          console.warn(`No se encontró el artículo con ID: ${articleId}`);
          return of();
        }
        // Generar un nuevo slug si el título ha cambiado.
        const newSlug = updatedArticle.title !== existingArticle.title
          ? this.slugify(updatedArticle.title)
          : existingArticle.slug;

        // Preparar los datos actualizados del artículo.
        const updatedData: Article = {
          ...updatedArticle,
          slug: newSlug
        };

        // Actualizar el documento en Firestore con los nuevos datos.
        return this.afs.doc<Article>(`articles/${articleId}`).update(updatedData);
      }),
      catchError((error) => {
        // Manejar y registrar errores en caso de que ocurran durante la actualización.
        console.error('Error al actualizar el artículo:', error);
        return of();
      })
    );
  }

  // Método DELETE para eliminar un artículo de Firestore.
  deleteArticle(articleId: string): Observable<void> {
    // Eliminar el documento del artículo por su ID y manejar errores.
    return from(this.afs.doc<Article>(`articles/${articleId}`).delete()).pipe(
      catchError((error) => {
        // Manejar y registrar errores en caso de que ocurran durante la eliminación.
        console.error('Error al eliminar el artículo', error);
        return throwError(error);
      })
    );
  }
}
