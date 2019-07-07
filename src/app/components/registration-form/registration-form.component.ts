import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/http/app.service';
import { User } from 'src/service/http/model/user';
import { Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { AuthenticationService } from 'src/service/security/authentication.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  user: User={username:"", email:"", password:"", authdata:""};

  constructor(private authService: AuthenticationService, 
    private router: Router, 
    private toastController: ToastController,
    private modalController: ModalController) { }

  async presentToastSuccess(username: string) {
    const toast = await this.toastController.create({
      color: "success",
      message: 'Sie haben sich erfolgreich registriert: '+username,
      duration: 2000
    });
    toast.present();
  }
  async presentToastError(username: string) {
    const toast = await this.toastController.create({
      color: "danger",
      message: 'Username: '+ username + ' schon vergeben',
      duration: 2000
    });
    toast.present();
  }
  register(){
    this.authService.registerUser(this.user).subscribe(response =>{
        this.router.navigateByUrl('/home');
        this.presentToastSuccess(this.user.username);
        this.modalController.dismiss();
    },error=>{
      this.presentToastError(this.user.username);
    }); 
  }
}
