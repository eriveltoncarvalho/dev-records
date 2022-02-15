import { inject, injectable } from 'tsyringe';

import DevLevel from '../infra/typeorm/entities/DevLevels';
import IDevsLevelsRepository from '../repositories/IDevsLevelsRepository';


@injectable()
class FindAllDevsLevelService {
  constructor(
    @inject('DevsLevelsRepository')
    private devsLevelsRepository: IDevsLevelsRepository,
  ) {}

  public async execute(): Promise<DevLevel[] | undefined> {
    const devLevel = await this.devsLevelsRepository.findAll();

    return devLevel;
  }
}

export default FindAllDevsLevelService;
