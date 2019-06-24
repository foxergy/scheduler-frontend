import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginRegistrationModalComponent } from 'src/app/components/login-registration-modal/login-registration-modal.component';
import { SearchByCodeModalComponent } from 'src/app/components/search-by-code-modal/search-by-code-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async showLoginRegistrationModal(){
    const modal = await this.modalController.create({
      component: LoginRegistrationModalComponent,
      cssClass: 'modal-login-registration'
    });
    return await modal.present();
  }

  async showSearchByCodeModal(){
    const modal = await this.modalController.create({
      component: SearchByCodeModalComponent,
      cssClass: 'modal-search-by-code'
    });
    return await modal.present();
  }
}
