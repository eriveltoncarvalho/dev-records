import { Router } from 'express';

import DevsController from '../controller/DevsController';

const devsRouter = Router();
const devsController = new DevsController();

devsRouter.post('/', devsController.create);
devsRouter.get('/', devsController.show);
devsRouter.delete('/', devsController.deleteById);

export default devsRouter;
