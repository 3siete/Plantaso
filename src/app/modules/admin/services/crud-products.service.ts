import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Products } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CrudProductsService {
  private productsCollection: AngularFirestoreCollection<Products>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Products>('products');
  }
  
}
