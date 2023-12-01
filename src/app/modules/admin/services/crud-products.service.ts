import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, map, switchMap, throwError } from 'rxjs';
import { CardShop } from 'src/app/models/card-shop';
import { Products } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CrudProductsService {
  private productsCollection: AngularFirestoreCollection<Products>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Products>('products');
  }
   // CREATE
    createProduct(product: Products): Observable<void> {
      const idProduct = this.afs.createId();
      product.productId = idProduct;
      product.slug = this.slugify(product.title);

      return from(this.productsCollection.add(product)).pipe(
        switchMap((docRef: DocumentReference<Products>) => {
          return from(docRef.set({ ...product, productId: docRef.id }));
        }),
        catchError((error) => {
          console.error('Error desconocido al crear el producto', error);
          return throwError(error);
        })
      );
    }
      // READ
  getProductById(id: string): Observable<Products | null> {
    return this.afs.doc<Products>(`products/${id}`).valueChanges().pipe(
      map(product => product ? { ...product, id } : null),
      catchError((error) => {
        console.error('Error al obtener el producto por ID:', error);
        return throwError(error);
      })
    );
  }

  getSlugForProduct(productId: string): Observable<string | null> {
    return this.afs.doc<Products>(`products/${productId}`).valueChanges().pipe(
      map(product => {
        if (product) {
          return product.slug || null;
        } else {
          return null;
        }
      }),
      catchError((error) => {
        console.error('Error al obtener el slug para el producto:', error);
        return throwError(error);
      })
    );
  }

  getCardShops(): Observable<CardShop[]> {
    return this.productsCollection.valueChanges({ idField: 'id' }).pipe(
      map(products => products.map(product => this.mapToCardShop(product))),
      catchError((error) => {
        console.error('Error al obtener los productos (observable):', error);
        return throwError(error);
      })
    );
  }

  private mapToCardShop(product: Products): CardShop {
    return {
      productId: product.productId,
      title: product.title,
      description: product.description,
      imgURL: product.imgURL,
      price: product.price,
    };
    
  }
    // UPDATE
    updateProduct(productId: string, updatedProduct: Products): Observable<any> {
      return this.afs.doc<Products>(`products/${productId}`).valueChanges().pipe(
        switchMap((existingProduct: Products | undefined) => {
          if (!existingProduct) {
            console.warn(`No se encontró el producto con ID: ${productId}`);
            return of();
          }
  
          const newSlug = updatedProduct.title !== existingProduct.title
            ? this.slugify(updatedProduct.title)
            : existingProduct.slug;
  
          const updatedData: Products = {
            ...updatedProduct,
            slug: newSlug
          };
  
          return this.afs.doc<Products>(`products/${productId}`).update(updatedData);
        }),
        catchError((error) => {
          console.error('Error al actualizar el producto:', error);
          return of();
        })
      );
    }
  
}
