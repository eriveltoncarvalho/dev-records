import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IDevsLevelsRepository from '@modules/devLevels/repositories/IDevsLevelsRepository';

import Dev from '../infra/typeorm/entities/Dev';

import IDevsRepository from '../repositories/IDevsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  dev_level:string;
  name: string;
  sexo: string;
  email: string;
  birth_date: Date;
  age: number;
  hobby: string;
}

@injectable()
class CreateDevService {
  constructor(
    @inject('DevsRepository')
    private devsRepository: IDevsRepository,

    @inject('DevsLevelsRepository')
    private devsLevelsRepository: IDevsLevelsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    dev_level,
    name,
    sexo,
    email,
    birth_date,
    age,
    hobby}: IRequest): Promise<Dev> {
    const devLevelExist = await this.devsLevelsRepository.findByName(dev_level);

    if (!devLevelExist) {
      throw new AppError('Could not find any developer level with the given name');
    }
    const dev = await this.devsRepository.create({
      devLevel: devLevelExist,
      name,
      sexo,
      email,
      birth_date,
      age,
      hobby
    });

    return dev;
  }
}

export default CreateDevService;
