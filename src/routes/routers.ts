import express from 'express';
import { main } from './main';
import { article } from './article';

export const routes = express.Router();

routes.use(main);
routes.use(article);