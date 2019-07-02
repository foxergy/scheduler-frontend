import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-booking-modal',
  templateUrl: './schedule-booking-modal.component.html',
  styleUrls: ['./schedule-booking-modal.component.scss'],
})
export class ScheduleBookingModalComponent {

  constructor(public modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }
}
