import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Aluno, User, Photo];
const conection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conection));
models.forEach((model) => model.associate && model.associate(conection.models));
