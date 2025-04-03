import { asClass } from 'awilix';
import { ModulesService } from './Application';
import {
  ModulesController,
  ModulesRepositoryImplementation,
} from './Infrastructure';
import {
  GetAllModules,
  GetModule,
  CreateModule,
  DeleteModule,
  UpdateModule,
} from './Domain';
import { container } from '@server/utils/Container';

export const moduleApp = {
  modulesRepository: asClass(ModulesRepositoryImplementation),
  modulesService: asClass(ModulesService),
  modulesController: asClass(ModulesController),
  _getAllModules: asClass(GetAllModules),
  _getModule: asClass(GetModule),
  _create: asClass(CreateModule),
  _delete: asClass(DeleteModule),
  _update: asClass(UpdateModule),
};

export const modulesController = () =>
  container.resolve<ModulesController>('modulesController');
