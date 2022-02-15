import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

import devsLevelsRouter from '@modules/devLevels/infra/http/routes/devsLevels.routes';
import devsRouter from '@modules/devs/infra/http/routes/devs.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

routes.use('/devlevel', devsLevelsRouter);
routes.use('/dev', devsRouter);


export default routes;

