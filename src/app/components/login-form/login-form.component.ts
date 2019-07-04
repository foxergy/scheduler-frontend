import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/http/app.service';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  credentials={username: "", password: ""};
  user:string;
  password:string;

  constructor(private appService: AppService,
    private router: Router,
    private modalController: ModalController,
    private toastController: ToastController) { }

  async presentToast(username: string) {
    const toast = await this.toastController.create({
      color: "success",
      message: 'Welcome back '+username,
      duration: 2000
    });
    toast.present();
  }

  login(){
    this.appService.authenticate(this.credentials, ()=>{
      this.router.navigateByUrl('/survey-events');
      this.presentToast(this.credentials.username);
      this.modalController.dismiss();
    });
  }

}
