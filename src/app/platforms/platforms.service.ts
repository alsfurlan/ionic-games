import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Platform } from './platforms.model';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Platform[]> {
    return this.httpClient.get<Platform[]>(`${environment.apiUrl}/plataformas`);
  }

  save(platform: Platform) {
    return this.httpClient.post(`${environment.apiUrl}/plataformas`, platform);
  }
}
