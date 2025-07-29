// Barrel File - Arquivo que reexporta todos os arquivos do schema(nesse caso)

import { questions } from './questions.ts';
import { rooms } from './rooms.ts';

export const schema = {
  rooms,
  questions,
};
