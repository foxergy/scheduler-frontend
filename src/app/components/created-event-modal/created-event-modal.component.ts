import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-created-event-modal',
  templateUrl: './created-event-modal.component.html',
  styleUrls: ['./created-event-modal.component.scss'],
})
export class CreatedEventModalComponent {
  generatedUUID: string = "90jrt43w98pthre";
  url: string = "www.someurl.de/" + this.generatedUUID;
  constructor(public modalController: ModalController, public toastController: ToastController) { }
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
