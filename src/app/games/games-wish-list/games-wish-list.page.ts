import { Component, OnInit } from '@angular/core';
import { GamesWishListService } from '../games-wish-list.service';
import { Game } from '../games.model';

@Component({
  selector: 'app-games-wish-list',
  templateUrl: './games-wish-list.page.html',
  styleUrls: ['./games-wish-list.page.scss'],
})
export class GamesWishListPage implements OnInit {
  loading = false;
  games: Game[];

  constructor(private gamesWishList: GamesWishListService) {}

  ngOnInit() {
    this.loading = true;
    this.gamesWishList.getWishList().subscribe((games) => {
      this.games = games;
      this.loading = false;
    });
  }
}
