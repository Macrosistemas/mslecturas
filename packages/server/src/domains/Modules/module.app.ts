import { asClass } from 'awilix';
import { ModulesService } from './Application';
import {
  ModuleController,
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

export const mdouleApp = {
  modulesRepository: asClass(ModulesRepositoryImplementation),
  modulesService: asClass(ModulesService),
  moduleController: asClass(ModuleController),
  _getAllModules: asClass(GetAllModules),
  _getModule: asClass(GetModule),
  _Create: asClass(CreateModule),
  _Delete: asClass(DeleteModule),
  _Update: asClass(UpdateModule),
};

export const moduleController = () =>
  container.resolve<ModuleController>('moduleController');
