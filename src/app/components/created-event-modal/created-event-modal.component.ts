import { Component } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-created-event-modal',
  templateUrl: './created-event-modal.component.html',
  styleUrls: ['./created-event-modal.component.scss'],
})
export class CreatedEventModalComponent {
  generatedUUID: string = "";
  url: string = "";

  constructor(public modalController: ModalController, public toastController: ToastController, public navParams: NavParams) { 
    this.generatedUUID = this.navParams.get('uuid');
    this.url = this.navParams.get('url');
  }

  closeModal() {
    this.modalController.dismiss();
  }
  
  async presentToast(text: string) {
    const toast = await this.toastController.create({
      color: "primary",
      message: text + ' wurde erfolgreich in Ihre Zwischenablage kopiert',
      duration: 2000
    });
    toast.present();
  }
  /*
  *   That is the only method to copy to a clipboard
  *   besides importing other libraries
  */
  toClipBoard(text: string) {
    var el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.presentToast(text);
  }
}
