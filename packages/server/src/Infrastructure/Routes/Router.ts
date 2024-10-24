import { Express } from 'express';
import { UserRoutes } from '@server/domains/Users';
import { router, trpcExpress, createContext } from '../trpc';
import { AuthRoutes } from '@server/domains/Auth/Infrastructure/Routes';
import { ModuleRoutes } from '@server/domains/Modules';
import { ReadingRoutes } from '@server/domains/Readings';

const AllRouters = {
  ...UserRoutes,
  ...AuthRoutes,
  ...ModuleRoutes,
  ...ReadingRoutes,
};

const MainRouter = router(AllRouters);

const InstanceMainRouter = (app: Express) => {
  app.use(
    '/api',
    trpcExpress.createExpressMiddleware({ router: MainRouter, createContext }),
  );
};

export type TMainRouter = typeof MainRouter;
export { InstanceMainRouter };
