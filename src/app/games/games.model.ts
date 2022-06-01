import { Platform } from '../platforms/platforms.model';

export interface Game {
  id: number;
  nome: string;
  genero: Genero;
  preco: number;
  lancamento: Date;
  logo: string;
  plataformas: Platform[];
}

export enum Genero {
  RPG = 'RPG',
  FPS = 'FPS',
  ESPORTES = 'ESPORTES',
  ARCADE = 'ARCADE',
  ACAO = 'ACAO',
  PUZZLE = 'PUZZLE',
}
