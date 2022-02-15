import Dev from '../infra/typeorm/entities/Dev';

import ICreateDevDTO from '../dtos/ICreateDevDTO';

export default interface IDevsRepository {
  create(data: ICreateDevDTO): Promise<Dev>;
  findById(id: string): Promise<Dev | undefined>;
  findAll(): Promise<Dev[] | undefined>;
  deleteById(id: string): Promise<Dev | undefined>;
}
