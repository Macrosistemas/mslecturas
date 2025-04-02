import { router } from '@server/Infrastructure/trpc';
import { ModuleRoutes } from './ModuleRoutes';

const ModulesRouter = () => router(ModuleRoutes());
export type TModulesRouter = typeof ModulesRouter;
