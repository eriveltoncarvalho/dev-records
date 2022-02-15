import { inject, injectable } from 'tsyringe';

import Dev from '../infra/typeorm/entities/Dev';
import IDevsRepository from '../repositories/IDevsRepository';


@injectable()
class RemoveDevService {
  constructor(
    @inject('DevsRepository')
    private devsRepository: IDevsRepository,
  ) {}

  public async execute(id: string): Promise<Dev | undefined> {
    const dev = await this.devsRepository.deleteById(id);

    return dev;
  }
}

export default RemoveDevService;
