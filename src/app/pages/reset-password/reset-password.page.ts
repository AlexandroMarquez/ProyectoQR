import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';
  resetForm: FormGroup;
  correo: string = ''; // Declaración de la variable correo

  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async reset() {
    const f = this.resetForm.value;
    const userJSON = await Preferences.get({ key: 'usuarioData' });

    console.log(f);
    console.log(userJSON);
    if (userJSON && userJSON.value) {
      const userData = JSON.parse(userJSON.value);
      console.log(userData);

      if (userData && userData.correo) {
        this.correo = userData.correo; 
        console.log(userData);
        console.log(userData.correo);
      } else {
        // Maneja el caso en el que no se encontró 'correo' en los datos del usuario.
      }
    } else {
      // Maneja el caso en el que 'usuarioData' es nulo o no contiene 'value'.
    }

    if (f.email === this.correo) {
      // Envía un correo de restablecimiento de contraseña a la dirección de correo proporcionada.
      // Agrega tu lógica para enviar el correo.
      console.log("el correo es correcto");

      // Por ejemplo:
      // Enviar un correo a f.email con un enlace para restablecer la contraseña.

      // Luego puedes mostrar un mensaje al usuario informando que se ha enviado un correo de restablecimiento.
      alert('Se ha enviado un correo de restablecimiento de contraseña a ' + f.email);
    } else {
      // Si el correo no coincide con el registrado, muestra un mensaje de error.
      alert('El correo ingresado no se encuentra registrado.');
    }
  }
}
