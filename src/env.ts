//  Arquivo env.ts - Fazer a validação e o parse das variáveis de ambiente - Garantir que a aplicação não execute se não tiver as váriaveis obrigatórias

import { z } from 'zod';

const envSchema = z.object({
  //coerce é uma func do zod que faz a conversão da string nesse caso para número para número
  PORT: z.coerce.number().default(3333),
  //setando o formato esperado para receber o db
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
});

export const env = envSchema.parse(process.env);
