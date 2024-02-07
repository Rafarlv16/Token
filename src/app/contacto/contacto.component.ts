import { Component } from '@angular/core';




@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
    nombre: string = '';
    apellidos: string = ''; // Campo de apellidos agregado
    email: string = '';
    telefono: string = '';
    mensaje: string = '';

    enviarMensaje() {
        // Lógica para enviar el mensaje aquí

        // Mostrar el mensaje de confirmación
        const mensajeEnviado = document.getElementById('envio-confirmado');
        if (mensajeEnviado) {
            mensajeEnviado.style.display = 'block';

            // Ocultar el mensaje después de unos segundos (ajusta el tiempo según tus necesidades)
            setTimeout(() => {
                mensajeEnviado.style.display = 'none';
            }, 3000); // 3000 milisegundos (3 segundos)
        }

        // Restablecer los campos del formulario
        this.nombre = '';
        this.apellidos = ''; // Restablecer el campo de apellidos
        this.email = '';
        this.telefono = '';
        this.mensaje = '';
    }
}
