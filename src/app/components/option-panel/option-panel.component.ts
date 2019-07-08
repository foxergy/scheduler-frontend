import { Component, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatedEventModalComponent } from '../created-event-modal/created-event-modal.component';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.scss'],
})
export class OptionPanelComponent {
  toggle:boolean = false;

  constructor(private modalController: ModalController){}

  async showSearchByCodeModal(){
    const modal = await this.modalController.create({
      component: CreatedEventModalComponent,
      cssClass: 'modal-created-event'
    });
    return await modal.present();
  }

  @Output() intervalChange: EventEmitter<number>= new EventEmitter;

  intervalChanged(event: number){
    this.intervalChange.emit(event);
  }
}
