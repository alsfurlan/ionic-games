import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games-list',
    pathMatch: 'full'
  },
  {
    path: 'games-list',
    loadChildren: () => import('./games/games-list/games-list.module').then( m => m.GamesListPageModule)
  },
  {
    path: 'games-register',
    loadChildren: () => import('./games/games-register/games-register.module').then( m => m.GamesRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
