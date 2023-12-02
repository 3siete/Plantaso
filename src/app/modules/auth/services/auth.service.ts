// Importaciones necesarias de Angular, Firebase y RxJS
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

// Decorador que marca la clase como disponible para ser proporcionada e inyectada como dependencia
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Subject para emitir los datos del usuario actual
  userData: Subject<any> = new Subject<any>();

  // Constructor para inyectar dependencias
  constructor(
    private afAuth: AngularFireAuth, // Servicio de autenticación de Firebase
    private afs: AngularFirestore,   // Servicio de Firestore de Firebase
    public router: Router            // Servicio de enrutamiento de Angular
  ) { 
    // Suscripción al estado de autenticación de Firebase
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData.next(user); // Emitir datos del usuario si está autenticado
      } else {
        this.userData.next(null); // Emitir null si no hay usuario autenticado
      }
    });
  }

  // Método para iniciar sesión con email y contraseña
  login({email, password}: any) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/inicio']); // Navegar a la página de inicio en caso de éxito
      })
      .catch((error) => {
        console.error(error); // Manejar errores
      });
  }

  // Método para registrar un nuevo usuario con email y contraseña
  register({ email, password }: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error(error); // Manejar errores
        throw error;
      });
  }

  // Método para establecer o actualizar los datos del usuario en Firestore
  SetUserData(user: any, formData: any) {
    if (!user) {
      console.error("User is undefined or null.");
      return;
    }
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  
    // Crear un objeto con los datos del usuario
    const userData: User = {
      uid: user.uid,
      email: formData.email, // Usar el email del formulario
      name: formData.name,
      lastname: formData.lastname,
      rol: formData.rol
    };
    return userRef.set(userData, { merge: true }); // Actualizar o establecer los datos del usuario
  }
  
  // Método para cerrar sesión
  signOut(): void {
    this.afAuth.signOut().then(() => {
      this.userData.next(null); // Actualizar el Subject a null
      this.router.navigate(['/iniciarsesion']); // Navegar a la página de inicio de sesión
    });
  }

}
