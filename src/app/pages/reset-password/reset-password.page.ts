import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';
  resetForm: FormGroup;
  correo: string = ''; // Declaración de la variable correo

  constructor(private fb: FormBuilder, private alertController: AlertController, private router: Router) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async reset() {
    const f = this.resetForm.value;  
    // Obtener los datos del usuario almacenados en capacitorStorage
    const userResult = await Preferences.get({ key: 'usuarioData' });
    console.log(f);
    console.log(userResult);
  
    if (userResult && userResult.value) {
      // Parsear el valor de usuarioData a un arreglo de objetos
      const userDataArray = JSON.parse(userResult.value);
  
      if (Array.isArray(userDataArray) && userDataArray.length > 0) {
        // Obtener el primer objeto del arreglo (suponiendo que haya solo uno)
        const userData = userDataArray[0];
  
        // Verificar si el correo ingresado por el usuario coincide con el correo almacenado
        if (userData && userData.correo === f.email) {
          console.log('El correo es correcto. Se Ha enviado un correo de restablecimiento.');
          this.router.navigate(['/set-password']);

        } else {
          // El correo no coincide con el registrado.
          console.log('El correo ingresado no coincide con el correo registrado.');
        }
      } else {
        // El valor de usuarioData no es un arreglo válido o está vacío.
        console.log('El valor de usuarioData no es válido o está vacío.');
      }
    } else {
      // No se pudo obtener usuarioData o su valor.
      console.log('No se pudo obtener los datos del usuario.');
    }
  }
  
}
