import { Injectable } from '@angular/core';
import { ToastButton, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private toastController: ToastController) {}

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
        },
      ],
    });
    toast.present();
  }

  async error(message: string, handler?: () => void) {
    let buttons: ToastButton[] = [{ side: 'end', icon: 'close-outline' }];

    if (handler) {
      buttons = [
        ...buttons,
        {
          icon: 'refresh-outline',
          side: 'start',
          handler: () => handler(),
        },
      ];
    }

    const toast = await this.toastController.create({
      message,
      color: 'danger',
      position: 'top',
      buttons,
    });
    toast.present();
  }
}
