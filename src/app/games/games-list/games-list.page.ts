import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AlertController,
  ToastController,
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { GamesApiService } from '../games-api.service';
import { Game } from '../games.model';

import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.page.html',
  styleUrls: ['./games-list.page.scss'],
})
export class GamesListPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  games: Game[];
  loading = false;

  constructor(
    private alertController: AlertController,
    private gamesApiService: GamesApiService,
    private messageService: MessageService,
  ) {
    this.games = [];
  }

  ngOnInit() {
    console.log('GamesListPage ngOnInit');
  }

  ionViewWillEnter(): void {
    this.listGames();
    console.log('GamesListPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('GamesListPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('GamesListPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('GamesListPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('GamesListPage ngOnDestroy');
  }

  listGames() {
    this.loading = true;
    this.gamesApiService.getGames().subscribe(
      (games) => {
        this.games = games
        this.loading = false;
      },
      () => {
        this.messageService.error('Erro ao buscar a lista de games', () => this.listGames())
        this.loading = false;
      }
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
    this.gamesApiService.remove(game.id).subscribe(
      () => {
        // Alternativa 1
        this.listGames();
        // Alternativa 2
        // this.games = this.games.filter(g => g.id !== game.id);
      },
      () => this.messageService.error('Erro ao excluir o game', () => this.remove(game))
    );
  }

}
