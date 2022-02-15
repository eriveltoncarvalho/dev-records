import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateDevService from '@modules/devs/services/CreateDevService';
import FindAllDevService from '@modules/devs/services/FindAllDevService';
import RemoveDevService from '@modules/devs/services/RemoveDevService';

export default class DevsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const devAll = container.resolve(FindAllDevService);

    const dev = await devAll.execute();

    return response.json(dev);
  }

  public async deleteById(request: Request, response: Response): Promise<Response> {
    const {id} = request.query;

    const devAll = container.resolve(RemoveDevService);

    const dev = await devAll.execute(String(id));

    return response.json(dev);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      dev_level,
      name,
      sexo,
      email,
      birth_date,
      age,
      hobby } = request.body;

    const createDev = container.resolve(CreateDevService);

    const dev = await createDev.execute({
      dev_level,
      name,
      sexo,
      email,
      birth_date,
      age,
      hobby ,
    });

    return response.json(dev);
  }
}
