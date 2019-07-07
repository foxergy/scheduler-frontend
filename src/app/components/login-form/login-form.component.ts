import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/service/security/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  credentials={username: "", password: ""};
  user:string;
  password:string;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private toastController: ToastController) { }

  ngOnInit(): void {
    // reset login status
    this.authService.logout();
  }

  async presentToastSuccess(username: string) {
    const toast = await this.toastController.create({
      color: "success",
      message: 'Welcome back '+username,
      duration: 2000
    });
    toast.present();
  }

  async presentToastError(error: string) {
    const toast = await this.toastController.create({
      color: "danger",
      message: error + "try again",
      duration: 2000
    });
    toast.present();
  }

  login(){
    this.authService.login(this.credentials.username, this.credentials.password)
    .subscribe(response =>{
      console.table(response);
      if(response === 200){
        let user= {username: this.credentials.username, email: "", password: this.credentials.password, authData: window.btoa(this.credentials.username+ ':' + this.credentials.password)};
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.presentToastSuccess(this.credentials.username);
        this.modalController.dismiss();
        this.router.navigateByUrl('/survey-events');
    }
    },error=>{
      console.log("login err "+ error);
      this.presentToastError(error);
    }); 
  }
}