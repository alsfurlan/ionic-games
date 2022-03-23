import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './games.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(`${environment.apiUrl}/games`);
  }

  remove(id: number) {
    return this.httpClient.delete<void>(`${environment.apiUrl}/games/${id}`);
  }

}
