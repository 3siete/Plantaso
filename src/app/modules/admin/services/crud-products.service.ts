import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudProductsService {
  private productsCollection: AngularFirestoreCollection<Products>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Products>('products');
  }
  
}
