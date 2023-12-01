// Importando módulos necesarios de Angular
import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';
import { AfterViewInit, ElementRef, OnInit, inject } from '@angular/core'; import { AuthService } from 'src/app/modules/auth/services/auth.service';

import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {



  user: User | null = null; // Initialize with null
  login: boolean = false;
  rol: 'comprador' | 'admin' = 'comprador';

  constructor(
    private el: ElementRef,
    private elementRef: ElementRef,
    private router: Router,
    private authService: AuthService,
    private auth: Auth,
    private sharedservice: SharedService


  ) {

    this.sharedservice.isLoggedIn().subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        console.log('El usuario está logueado');
        // Realiza las acciones necesarias cuando el usuario está logueado
        this.login = true;
        // Obtener el UID del usuario logueado
        const user = this.auth.currentUser;
        if (user) {
          const uid = user.uid;
          this.getDatosUser3(uid); // Pasar el UID a la funciónk
        }
      } else {
        console.log('El usuario no está logueado');
        // Realiza las acciones necesarias cuando el usuario no está logueado
        this.login = false;
      }
    });
  }

  getDatosUser3(uid: string | undefined) {
    if (uid) {
      this.sharedservice.getUserByUid(uid).subscribe(user => {
        if (user) {
          console.log('Usuario encontrado:', user);
          console.log('Rol usuario', user.rol);

          if (user.rol === 'comprador' || user.rol === 'admin') {
            this.rol = user.rol;
          } else {
            this.rol = 'comprador';
          }
        } else {
          console.log('Usuario no encontrado');
        }
      });
    }
  }





  hover1: boolean = false;

  hover2: boolean = false;

  hover3: boolean = false;

  hover4: boolean = false;



  mouseover() {

  }

}
