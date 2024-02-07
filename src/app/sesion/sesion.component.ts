import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EmailAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  correo: string = ''; // Variable para almacenar correo
  contrasena: string = ''; // Variable para almacenar contraseña
  errorMessage: string = ''; // Variable para almacenar el mensaje de error

  constructor(private auth: AngularFireAuth, private router: Router) {} 

  async iniciarSesion() {
    try {
      this.errorMessage = ''; // Limpia el mensaje de error al intentar iniciar sesión

      if (this.correo && this.contrasena) {
        const email = this.correo;
        const password = this.contrasena;
        const credentials = EmailAuthProvider.credential(email, password);
        await this.auth.signInWithCredential(credentials);

        // Redirige a la página de inicio después de la autenticación exitosa
        this.router.navigate(['/inicio']);
      } else {
        this.errorMessage = 'Por favor, ingresa un correo y una contraseña válidos.';
        setTimeout(() => {
          this.errorMessage = ''; // Borra el mensaje después de unos segundos
        }, 5000); // Cambia 5000 a la cantidad de milisegundos que desees
      }
    } catch (error: any) { // Declara explícitamente el tipo del error
      this.errorMessage = 'Error al iniciar sesión: ' + error.message;
      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
    }
  }

  async cerrarSesion() {
    try {
      await this.auth.signOut();
    } catch (error: any) { // Declara explícitamente el tipo del error
      this.errorMessage = 'Error al cerrar sesión: ' + error.message;
      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
    }
  }
}
