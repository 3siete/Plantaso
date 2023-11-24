import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CardPost } from 'src/app/models/card-post';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private ads: AngularFirestore) { }

  //READ
  getCardPost(): Observable<CardPost[]>{
    
  }
}
