import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.page.html',
  styleUrls: ['./set-password.page.scss'],
})
export class SetPasswordPage {

  setForm: FormGroup; // Declarar la propiedad 'setForm' aquí

  constructor(private fb: FormBuilder, private alertController: AlertController, private router: Router) {
    this.setForm = this.fb.group({
      password: ['', [Validators.required]],
    });
  }

  async setPassword() {
    const f = this.setForm.value;
    const userResult = await Preferences.get({ key: 'usuarioData' });
    console.log(f);
    console.log(userResult);
  }
}
