import { inject, injectable } from 'tsyringe';

import Dev from '../infra/typeorm/entities/Dev';
import IDevsRepository from '../repositories/IDevsRepository';


@injectable()
class FindAllDevService {
  constructor(
    @inject('DevsRepository')
    private devsRepository: IDevsRepository,
  ) {}

  public async execute(): Promise<Dev[] | undefined> {
    const dev = await this.devsRepository.findAll();

    return dev;
  }
}

export default FindAllDevService;
