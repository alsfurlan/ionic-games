import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>('http://localhost:3000/games');
  }
}
