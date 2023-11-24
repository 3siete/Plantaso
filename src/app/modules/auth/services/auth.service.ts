import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData : Subject<any> = new Subject<any>;

  constructor(
    private afAuth: AngularFireAuth, 
    private afs: AngularFirestore,
    public router: Router
    ) { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData.next(user);
      } else {
        this.userData.next(null)
      }
    })
  }

  login({email, password}: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['/inicio']);
          }
        });
      })
      .catch((error) => {console.error(error)})
  }

  register({email, password}: any){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((res) => {this.SetUserData(res.user)})
    .catch((error) => {console.error(error)})
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc( `users/${ user.uid }` );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
    };
    return userRef.set(userData, { merge: true });
  }
  
  signOut(): void {
    this.afAuth.signOut() 
    .then((res) => {localStorage.removeItem('user');
    this.router.navigate(['/iniciarsesion'])
  })
  }

}
