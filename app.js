import express from 'express';
import cors from 'cors';
import LimitPetitions from './config/rateLimit.js';
import routerDynamic from './routers/index.js';
import dotenv from 'dotenv/config';
import { validate } from './validations/validations.js';

const config = {
  hostname: process.env.HOST,
  port: process.env.PORT_BACKEND,
};

const corsOptions = {
  origin: `http://${process.env.HOST_FRONTEND}:${process.env.PORT_FRONTEND}`,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept-version'],
};

const app = express();

app
  .use(LimitPetitions.limitAllPetitions())
  .use(cors(corsOptions))
  .use(express.json())
  .use('/ai-labs', dynamicRouterHandler)
  .listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}/ai-labs`);
  });

async function dynamicRouterHandler(req, res, next) {
  try {
    const dynamicRouter = validate(await routerDynamic(req.header('Accept-version')));
    dynamicRouter(req, res, next);
  } catch (error) {
    res.status(400).send({ status: 405, message: 'Ingrese en los headers la versión a utilizar para el API' });
  }
}