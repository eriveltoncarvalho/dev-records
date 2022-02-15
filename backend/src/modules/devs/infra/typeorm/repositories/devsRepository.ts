import { getRepository, Repository } from 'typeorm';

import IDevsRepository from '@modules/devs/repositories/IDevsRepository';
import ICreateDevDTO from '@modules/devs/dtos/ICreateDevDTO';
import Dev from '../entities/Dev';

class DevsRepository implements IDevsRepository {
  private ormRepository: Repository<Dev>;

  constructor() {
    this.ormRepository = getRepository(Dev);
  }

  public async create({
    devLevel,
    name,
    sexo,
    email,
    birth_date,
    age,
    hobby
  }: ICreateDevDTO): Promise<Dev> {
    const dev = this.ormRepository.create({
      devLevel,
      name,
      sexo,
      email,
      birth_date,
      age,
      hobby
    });

    await this.ormRepository.save(dev);

    return dev;
  }

  public async findById(id: string): Promise<Dev | undefined> {
    const dev = this.ormRepository.findOne(id, {
      relations: ['dev_level'],
    });

    return dev;
  }

  public async findAll(): Promise<Dev[] | undefined> {
    const dev = await this.ormRepository.find();

    return dev;
  }

  public async deleteById(id: string): Promise<Dev | undefined> {
    await this.ormRepository.delete(id);

    return;
  }


}

export default DevsRepository;
