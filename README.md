# nlw-agents-server

# Libs instaldas

## Fastfy

## npm i fastify @fastify/cors fastify-type-provider-zod zod

## - FastfyCors (Configuração do Cors (Cors: Medida de segurança para dizer quais URL/Fronts vão poder consumir a ApI ))

## - FastfyZod (Parte de Validação (Ex: Criar uma sala e o Título dela é obrigatório, ele faz essa validação))

---

# Formatação

## Extenções

## - Biome (Formatador de Código) - npm i @biomejs/biome -D npx ultracite init (presets de configs do biome)

## - Rest Cliente

## - Tailwind Css IntelliSense (Front-end)

# Docker Comands

## docker compose up -d - Roda a container do dock o -d serve para ele não ficar travado no terminal

## docker ps - Consegue ver seus contaniers que estão rodando

## docker logs númeroDoLog - Para ver os logs de algum container especiífico

## docker ps -a - Para ver TODOS os containers que você tem

## docker prune - Para deletar containers

# Conecção com o Banco de dados

## npm i postgres - Biblioteca usada para fazer a conexão

# Para fazer a criação das tabelas

## npm i drizzle-orm - Sintaxe mto próxima ao sql

## npm i drizzle-kit - CLI do drizzle para rodar alguns comandos, criar algumas tabela automaticas etc

## npx drizzle-kit generate - Cria dentro de migrations um arquivo que cria a tabela rooms

## npx drizzle-kit migrate - Roda a migration que o generate criou

## npx drizzle-kit studio - Para visualizar o DB pelo navegador

# npm i drizzle-seed -D - Pacote para fazer o seed(basicamente faz uma pré população com dados ficticions no Banco de Dados)
