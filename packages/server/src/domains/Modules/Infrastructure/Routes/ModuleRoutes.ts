import { modulesController } from '../../module.app';

export const ModuleRoutes = () => {
  const { getAllModules, getModule, createModule, deleteModule, updateModule } =
    modulesController();

  return {
    modules: {
      getAll: getAllModules,
      create: createModule,
      get: getModule,
      delete: deleteModule,
      update: updateModule,
    },
  };
};
