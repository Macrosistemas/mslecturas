import { modulesController } from '../../module.app';

export const ModuleRoutes = () => {
  const { getAllModules, createModule, deleteModule, getModule, updateModule } =
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
