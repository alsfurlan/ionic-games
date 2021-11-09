import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Lista de Games', url: '/folder/Inbox', icon: 'game-controller' },
    { title: 'Cadastro de Games', url: '/folder/Outbox', icon: 'duplicate' },
  ];

  constructor() {}
}
