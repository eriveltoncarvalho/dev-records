import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import DevLevel from '../infra/typeorm/entities/DevLevels';
import IDevsLevelsRepository from '../repositories/IDevsLevelsRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateDevLevelService {
  constructor(
    @inject('DevsLevelsRepository')
    private devsLevelsRepository: IDevsLevelsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<DevLevel> {
    const devlevelExists = await this.devsLevelsRepository.findByName(name);

    if (devlevelExists) {
      throw new AppError('There is already onde developer level with this name');
    }

    const devLevel = await this.devsLevelsRepository.create({
      name
    });

    return devLevel;
  }
}

export default CreateDevLevelService;
