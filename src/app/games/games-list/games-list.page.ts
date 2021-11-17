import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Game, Genero } from '../games.model';

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
    private gamesService: GamesService
  ) {
    this.games = this.gamesService.getGames();
  }

  ngOnInit() {}

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
