import { router } from '@server/Infrastructure/trpc';
import { ModuleRoutes } from './ModuleRoutes';

const ModuleRouter = () => router(ModuleRoutes());
export type TModuleRouter = ReturnType<typeof ModuleRouter>;
