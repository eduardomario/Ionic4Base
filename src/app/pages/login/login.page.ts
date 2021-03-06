import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  userHide = true;
  userError = '';
  passHide = true;
  passError = '';
  constructor(
    private fb: FormBuilder,
    public router: Router,
    protected data: DataService,
    private alertCtrl: AlertController
    ) {
    this.loginForm = this.fb.group({
        user: ['', Validators.compose([
          Validators.maxLength(70),
          Validators.required,
          Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  ngOnInit() {
  }

  login() {
    this.data.setIsLoadingEvent(true);
    setTimeout(() => {
      this.data.setIsLoadingEvent(false);
      this.data.setIsLoggedEvent(true);
      this.router.navigate(['menu/tab/home'], { replaceUrl: true });
    }, 2000);
  }

  regirtro() {
    this.router.navigate(['registroUno']);
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      message: 'Tu usuario y/o contraseña no son correctos, inténtalo de nuevo',
      buttons: ['OK']
    });
    await alert.present();
  }
}
