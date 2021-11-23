export interface Game {
  id: number;
  nome: string;
  genero: Genero;
  preco: number;
  lancamento: Date;
  foto: string;
}

export enum Genero {
  RPG = 'RPG',
  FPS = 'FPS',
  ESPORTES = 'ESPORTES',
  ARCADE = 'ARCADE',
  ACAO = 'ACAO',
  PUZZLE = 'PUZZLE',
}
