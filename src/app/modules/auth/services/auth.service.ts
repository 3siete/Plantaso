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
    return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
          this.router.navigate(['/inicio']);
        })
      .catch((error) => {
        console.error(error);
      });
  }

  register({ email, password }: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  SetUserData(user: any, formData: any) {
    if (!user) {
      console.error("User is undefined or null.");
      return;
    }
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  
    // Verificar que los campos necesarios no sean undefined
    const userData: User = {
      uid: user.uid,
      email: formData.email, // Usar el email del formulario, no del objeto user
      name: formData.name,
      lastname: formData.lastname,
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
