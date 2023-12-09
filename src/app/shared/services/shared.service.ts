// Importaciones necesarias de Angular y Firebase
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, setDoc, getDoc, DocumentData, DocumentSnapshot, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDocs } from '@firebase/firestore';
import { User } from '../../../app/modules/auth/models/user.model'; // Modelo de usuario personalizado

// Decorador que marca la clase como 'inyectable', permitiendo que Angular la use en diferentes partes de la aplicación.
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // Constructor de la clase, inyecta dependencias de autenticación y Firestore.
  constructor(private auth: Auth, private firestore: Firestore) {}

  // Método para verificar si un usuario está actualmente logueado.
  isLoggedIn(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      // Escucha los cambios en el estado de autenticación.
      this.auth.onAuthStateChanged(user => {
        // Notifica al observador con 'true' si hay un usuario logueado, de lo contrario 'false'.
        observer.next(!!user);
        // Completa la observación.
        observer.complete();
      });
    });
  }

  // Método para obtener un usuario específico por su UID de Firestore.
  getUserByUid(uid: string): Observable<User | null> {
    // Referencia al documento del usuario en Firestore.
    const userRef = doc(this.firestore, 'users', uid);
    // Obtiene el documento y lo convierte en un Observable.
    return from(getDoc(userRef)).pipe(
      // Mapea el resultado a un modelo de usuario o null si no existe.
      map((snapshot: DocumentSnapshot<DocumentData>) => {
        // Si el documento existe, lo devuelve como un objeto 'User', de lo contrario devuelve 'null'.
        return snapshot.exists() ? { uid: snapshot.id, ...snapshot.data() } as User : null;
      })
    );
  }


}
