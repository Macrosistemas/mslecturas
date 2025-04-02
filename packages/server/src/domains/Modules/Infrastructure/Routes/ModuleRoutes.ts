import { moduleController } from '../../module.app';

export const ModuleRoutes = () => {
  const { getAllModules, getModule, createModule, deleteModule, updateModule } =
    moduleController();

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
