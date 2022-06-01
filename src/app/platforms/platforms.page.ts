import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform } from './platforms.model';
import { PlatformsService } from './platforms.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.page.html',
  styleUrls: ['./platforms.page.scss'],
})
export class PlatformsPage implements OnInit {
  platforms: Platform[];
  loading = false;

  constructor(
    private alertController: AlertController,
    private platformsService: PlatformsService
  ) {}

  ngOnInit() {
    this.loadPlatforms();
  }

  loadPlatforms() {
    this.loading = true;
    this.platformsService.findAll().subscribe((platforms) => {
      console.log(platforms);
      this.loading = false;
      this.platforms = platforms;
    });
  }

  async add() {
    const alert = await this.alertController.create({
      header: 'Cadastro de Plataformas',
      inputs: [
        {
          name: 'descricao',
          placeholder: 'Nome',
        },
        {
          name: 'logo',
          placeholder: 'Logo',
        },
      ],
      buttons: [
        {
          text: 'Salvar',
          handler: (value) => {
            this.loading = true;
            this.platformsService.save(value).subscribe(() => this.loadPlatforms());
          }
        },
        {
          text: 'Cancelar'
        }
      ]
    });
    alert.present();

  }
}
