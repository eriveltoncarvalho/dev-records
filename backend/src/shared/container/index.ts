import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IDevsLevelsRepository from '@modules/devLevels/repositories/IDevsLevelsRepository';
import DevsLevelsRepository from '@modules/devLevels/infra/typeorm/repositories/DevsLevelsRepository';

import IDevsRepository from '@modules/devs/repositories/IDevsRepository';
import DevsRepository from '@modules/devs/infra/typeorm/repositories/devsRepository';

container.registerSingleton<IUsersRepository> (
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUserTokensRepository> (
  'UserTokensRepository',
  UserTokensRepository
);

container.registerSingleton<IDevsLevelsRepository> (
  'DevsLevelsRepository',
  DevsLevelsRepository
);

container.registerSingleton<IDevsRepository> (
  'DevsRepository',
  DevsRepository
);

