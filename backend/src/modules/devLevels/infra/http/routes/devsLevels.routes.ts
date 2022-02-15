import { Router } from 'express';

import DevsLevelsController from '../controller/DevsLevelsController';

const devsLevelsRouter = Router();
const devsLevelsController = new DevsLevelsController();

devsLevelsRouter.post('/', devsLevelsController.create);
devsLevelsRouter.get('/', devsLevelsController.show);

export default devsLevelsRouter;
