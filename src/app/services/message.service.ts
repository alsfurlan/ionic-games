import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastController: ToastController
  ) { }

  async success(message: string) {
    const toast = await this.toastController.create({
      message,
      color: 'success',
      position: 'top',
      duration: 5000,
      buttons: [
        {
          icon: 'close-outline',
          side: 'end',
        }
      ]
    });
    toast.present();
  }

  async error(message: string, handler: () => void) {
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      position: 'top',
      buttons: [
        {
          icon: 'refresh-outline',
          side: 'start',
          handler: () => handler(),
        },
        { side: 'end', icon: 'close-outline' },
      ],
    });
    toast.present();
  }
}
