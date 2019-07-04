import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/http/app.service';
import { User } from 'src/service/http/model/user';
import { Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  user: User={username:"", email:"", password:""};

  constructor(private appService: AppService, 
    private router: Router, 
    private toastController: ToastController,
    private modalController: ModalController) { }

  async presentToast(username: string) {
    const toast = await this.toastController.create({
      color: "success",
      message: 'You successfully registered as: '+username,
      duration: 2000
    });
    toast.present();
  }

  register(){
    this.appService.registerUser(this.user, ()=>{
      this.router.navigateByUrl('/home');
      this.presentToast(this.user.username);
      this.modalController.dismiss();
    });
  }

}
