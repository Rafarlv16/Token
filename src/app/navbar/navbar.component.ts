import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isUserLoggedIn: boolean = false;

  constructor(private auth: AngularFireAuth, private router: Router) {
    auth.authState.subscribe((user) => {
      this.isUserLoggedIn = !!user;
    });
  }

  cerrarSesion() {
    this.auth.signOut().then(() => {
      this.isUserLoggedIn = false;
      this.router.navigate(['/inicio']); // Redirige a la página de inicio después de cerrar sesión
    });
  }
}
