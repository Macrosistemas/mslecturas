import { moduleController } from '../module.app';
const { getModules, createModule, deleteModule, getModule } = moduleController;

export const ModuleRoutes = {
  modules: {
    getAll: getModules,
    create: createModule,
    delete: deleteModule,
    get: getModule,
  },
};
