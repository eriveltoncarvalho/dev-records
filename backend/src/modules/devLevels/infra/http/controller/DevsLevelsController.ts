import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateDevLevelService from '@modules/devLevels/services/CreateDevLevelService';
import FindAllDevLevelService from '@modules/devLevels/services/FindAllDevLevelService';


export default class DevsLevelsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const devsLevelAll = container.resolve(FindAllDevLevelService);

    const devsLevels = await devsLevelAll.execute();

    return response.json(devsLevels);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createDevLevel = container.resolve(CreateDevLevelService);

    const devLevel = await createDevLevel.execute({
      name
    });

    return response.json(devLevel);
  }
}
