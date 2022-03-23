import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { GamesApiService } from '../games-api.service';
import { Game } from '../games.model';

import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.page.html',
  styleUrls: ['./games-list.page.scss'],
})
export class GamesListPage implements OnInit {
  games: Game[];

  constructor(
    private alertController: AlertController,
    private gamesApiService: GamesApiService,
    private toastController: ToastController
  ) {
    this.games = [];
  }

  ngOnInit() {
    this.listGames();
  }

  listGames() {
    this.gamesApiService.getGames().subscribe(
      (games) => this.games = games,
      () => this.onFail('Erro ao buscar a lista de games', () => this.listGames())
    );
  }

  confirmRemove(game: Game) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o game ${game.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(game),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(game: Game) {
    this.gamesApiService.remove(game.id)
      .subscribe(
      () => {
        // Alternativa 1
        this.listGames();
        // Alternativa 2
        // this.games = this.games.filter(g => g.id !== game.id);
      },
      () => this.onFail('Erro ao excluir o game', () => this.remove(game)));
  }


  async onFail(message: string, handler: () => void) {
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
