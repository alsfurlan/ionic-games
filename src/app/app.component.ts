import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Lista de Games', url: '/games-list', icon: 'game-controller' },
    { title: 'Cadastro de Games', url: '/games-register', icon: 'duplicate' },
    { title: 'Lista de Desejos', url: '/games-wish-list', icon: 'star' },
    { title: 'Plataformas', url: '/platforms', icon: 'terminal'}
  ];

  constructor() {}
}
