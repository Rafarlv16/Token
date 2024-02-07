import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  apellidos: string = '';
  telefono: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  errorMessage: string = '';

  constructor(private auth: AngularFireAuth, private router: Router) {}

  async registrarUsuario() {
    try {
      this.errorMessage = '';

      if (this.correo && this.contrasena && this.confirmarContrasena) {
        if (this.contrasena === this.confirmarContrasena) {
          // Verificar que el correo electrónico no esté en uso
          const email = this.correo;
          const password = this.contrasena;

          // Comprobar si el correo ya está en uso
          const users = await this.auth.fetchSignInMethodsForEmail(email);

          if (users.length === 0) {
            // El correo no está registrado, proceder al registro
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);

            // Puedes agregar información personalizada al usuario en Firestore o Realtime Database aquí

            // Redirigir a otra página después del registro
            this.router.navigate(['/inicio']);
          } else {
            this.errorMessage = 'Este correo electrónico ya está en uso.';
          }
        } else {
          this.errorMessage = 'Las contraseñas no coinciden.';
        }
      } else {
        this.errorMessage = 'Por favor, ingresa todos los campos requeridos.';
      }
    } catch (error: any) {
      this.errorMessage = 'Error al registrar usuario: ' + error.message;
    }
  }
}
