import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoute from './src/routes/home';
import userRoute from './src/routes/user';
import tokenRoute from './src/routes/token';
import alunoRoute from './src/routes/aluno';
import photoRoute from './src/routes/photo';
import { resolve } from 'path';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users', userRoute);
    this.app.use('/tokens/', tokenRoute);
    this.app.use('/alunos/', alunoRoute);
    this.app.use('/photos/', photoRoute);
  }
}

export default new App().app;
