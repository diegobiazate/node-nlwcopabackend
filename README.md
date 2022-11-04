# node-nlwcopabackend
Projeto Backend feito em Node durante NLW da Rocketseat

# Backend de um sistema de apostas

Desenvolvido com Typescript utilizando Prisma, Fastify, Zod.

Ao baixar o projeto, rodar o `npm install` para que seja feita a instalação das dependências.

### Objetivo:
Realizar apostas dos jogos da copa do mundo (podendo ser cadastrado jogos de outros campeonatos também).

Modulos:
- Cadastro de Usuário (através de autenticação do google)
- Cadastro de Bolão (Grupo de apostas)
- Cadastro de jogos
- Cadastro de Palpites

Algumas Regras:
- Um usuário pode fazer parte de mais de um bolão
- Um usuário só pode palpitar 1 vez em cada jogo do bolão
- Um bolão pode ser criado sem um dono, porém o primeiro participante a entrar no bolão, automaticamente se tornará o dono do bolão.
