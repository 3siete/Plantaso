import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, switchMap, throwError } from 'rxjs';
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
  
}
