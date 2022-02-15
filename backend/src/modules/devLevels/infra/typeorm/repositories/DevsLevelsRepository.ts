import { getRepository, Repository, In } from 'typeorm';

import IDevsLevelsRepository from '@modules/devLevels/repositories/IDevsLevelsRepository';
import ICreateDevLevelDTO from '@modules/devLevels/dtos/ICreateDevLevelDTO';
import DevLevel from '../entities/DevLevels';

class DevsLevelsRepository implements IDevsLevelsRepository {
  private ormRepository: Repository<DevLevel>;

  constructor() {
    this.ormRepository = getRepository(DevLevel);
  }

  public async create({
    name
  }: ICreateDevLevelDTO): Promise<DevLevel> {
    const devLevel = await this.ormRepository.create({
      name
    });

    await this.ormRepository.save(devLevel);

    return devLevel;
  }

  public async findByName(name: string): Promise<DevLevel | undefined> {
    const devLevel = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return devLevel;
  }

  public async findAll(): Promise<DevLevel[] | undefined> {
    const devsLevel = await this.ormRepository.find();

    return devsLevel;
  }
}

export default DevsLevelsRepository;
