import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { GamesApiService } from './games-api.service';
import { Game } from './games.model';

@Injectable({
  providedIn: 'root',
})
export class GamesWishListService {
  gamesIds: number[];

  constructor(
    private gamesApiService: GamesApiService,
    private messageMessage: MessageService
  ) {
    this.gamesIds = JSON.parse(localStorage.getItem('wishList')) ?? [];
  }

  getWishList(): Observable<Game[]> {
    const requests = this.gamesIds.map((gameId) =>
      this.gamesApiService.findById(gameId)
    );
    return requests.length ? forkJoin(requests) : of([]) ;
  }

  add({ id, nome }: Game) {
    if (this.gamesIds.some((gameId) => gameId === id)) {
      this.messageMessage.error(`Jogo ${nome} já está na sua lista de desejos`);
      return;
    }

    this.gamesIds = [...this.gamesIds, id];
    // this.gamesIds.push(id);
    localStorage.setItem('wishList', JSON.stringify(this.gamesIds));
    this.messageMessage.success(`Jogo ${nome} adicionado à lista de desejos!`);
  }

  remove({ id, nome }: Game) {
    this.gamesIds = this.gamesIds.filter((gameId) => gameId !== id);
    localStorage.setItem('wishList', JSON.stringify(this.gamesIds));
    this.messageMessage.success(`Jogo ${nome} removido da lista de desejos!`);
  }
}
