import DevLevel from '../infra/typeorm/entities/DevLevels';

import ICreateDevLevelDTO from '../dtos/ICreateDevLevelDTO';

export default interface IDevsLevelsRepository {
  create(data: ICreateDevLevelDTO): Promise<DevLevel>;
  findByName(name: string): Promise<DevLevel | undefined>;
  findAll(): Promise<DevLevel[] | undefined>;
}
