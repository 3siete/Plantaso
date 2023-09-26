import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Subject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData : Subject<any> = new Subject<any>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData.next(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.userData.next(null)
        localStorage.removeItem('user');
      }
    })
  }








  register(user: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((res) => {
      this.setUserData(res.user, user.name, user.password)
    })
  }

  setUserData(user:any, name?:string): Promise<any> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`)
    
  }



  


}
