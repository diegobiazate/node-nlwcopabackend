import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { pollRoutes } from "./routes/poll";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";
import { userRoutes } from "./routes/user";


async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    });

    await fastify.register(cors, {
        origin: true
    });

    //Em produção essa variável precisa estar como variavel de ambiente
    await fastify.register(jwt, {
        secret: 'tokenlocao'
    })

    await fastify.register(pollRoutes);

    await fastify.register(authRoutes);

    await fastify.register(gameRoutes);

    await fastify.register(guessRoutes);

    await fastify.register(userRoutes);

    fastify.listen({port: 3333, host:'0.0.0.0'});
};

bootstrap();