import { moduleController } from '../../module.app';
const { getAllModules, createModule, deleteModule, getModule, updateModule } =
  moduleController;

export const ModuleRoutes = {
  modules: {
    getAll: getAllModules,
    create: createModule,
    delete: deleteModule,
    update: updateModule,
    get: getModule,
  },
};
