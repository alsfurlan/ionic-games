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
    private gamesService: GamesService,
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
      (games) => this.listGamesSuccess(games),
      () => this.listGamesFail()
    );
  }

  listGamesSuccess(games: Game[]) {
    this.games = games;
  }

  async listGamesFail() {
    // this.toastController
    //   .create({
    //     message: 'Erro ao buscar a lista de games'
    //   }).then(toast => toast.present());

    const toast = await this.toastController.create({
      message: 'Erro ao buscar a lista de games',
      color: 'danger',
      position: 'top',
      buttons: [
        {
          icon: 'refresh-outline',
          side: 'start',
          handler: () => this.listGames(),
        },
        { side: 'end', icon: 'close-outline' },
      ],
    });
    toast.present();
  }

  excluir(game: Game) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o game ${game.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.gamesService.remove(game.nome);
              this.games = this.gamesService.getGames();
            },
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }
}
