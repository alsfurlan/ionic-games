import { Injectable } from '@angular/core';

import { Game, Genero } from './games.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Game[];
  private contador = 6;

  constructor() {
    this.games = [
      {
        id: 1,
        nome: 'Among us',
        genero: Genero.ACAO,
        preco: 10.0,
        lancamento: new Date(2000, 1, 1),
        foto: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
      },
      {
        id: 2,
        nome: 'CS:GO',
        genero: Genero.FPS,
        lancamento: new Date(2021, 10, 11),
        preco: 29.9,
        foto: 'https://th.bing.com/th/id/OIP.SWYgOJ8CrbBMQuP4-jHeigHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 3,
        nome: 'FIFA 22',
        genero: Genero.ESPORTES,
        preco: 299.9,
        lancamento: new Date(2022, 8, 17),
        foto: 'https://m.media-amazon.com/images/I/810V2t+RstL._AC_SL1500_.jpg',
      },
      {
        id: 4,
        nome: 'Forza Horizon 5',
        genero: Genero.ESPORTES,
        preco: 250.0,
        lancamento: new Date(2021, 11, 5),
        foto: 'https://s2.glbimg.com/jwTCUqqOoS7jkdFAezibkgZmY4g=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/Z/n/tpIAmwRQqFnoBG0xkTUg/forza-horizon-5-tudo-sobre-gameplay-requisitos-acessibilidade-praia.jpg',
      },
      {
        id: 5,
        nome: 'Assassins Creed Unity',
        genero: Genero.ACAO,
        preco: 59.9,
        lancamento: new Date(2014, 12, 13),
        foto: 'https://smartcdkeys.com/image/data/products/assassins-creed-unity-ps4/cover/assassins-creed-unity-ps4-smartcdkeys-cheap-cd-key-cover.jpg',
      },
    ];
  }

  public getGames() {
    return this.games;
  }

  public remove(nome: string) {
    this.games = this.games.filter((game) => game.nome !== nome);
  }

  public save(game: Game) {
    if (game.id) {
      const index = this.games.findIndex(g => g.id === game.id);
      this.games[index] = game;
    } else {
      const id = this.contador++;
      this.games.push({ ...game, id });
    }
  }

  public findById(id: number) {
    return this.games.find(game => game.id === id);
  }
}
