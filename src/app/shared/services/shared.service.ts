import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, setDoc, getDoc, DocumentData, DocumentSnapshot, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDocs } from '@firebase/firestore';
import { User } from '../../../app/modules/auth/models/user.model'; // Modelo de usuario personalizado

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private auth: Auth, private firestore: Firestore) {}

  isLoggedIn(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.auth.onAuthStateChanged(user => {
        observer.next(!!user); // Devuelve true si el usuario está logueado, de lo contrario false
        observer.complete();
      });
    });
  }

  // Método para obtener un usuario específico por UID de Firestore y devolverlo como un Observable
  getUserByUid(uid: string): Observable<User | null> {
    const userRef = doc(this.firestore, 'users', uid);
    return from(getDoc(userRef)).pipe(
      map((snapshot: DocumentSnapshot<DocumentData>) => {
        return snapshot.exists() ? { uid: snapshot.id, ...snapshot.data() } as User : null;
      })
    );
  }

}