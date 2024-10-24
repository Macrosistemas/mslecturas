import { container } from '@server/utils/Container';
import { ModulesService } from './Application';
import { asClass } from 'awilix';
import {
  GetAllModules,
  GetModule,
  CreateModule,
  DeleteModule,
  UpdateModule,
} from './Domain';
import {
  ModuleController,
  ModulesRepositoryImplementation,
} from './Infrastructure';

container.register({
  modulesRepository: asClass(ModulesRepositoryImplementation),
  modulesService: asClass(ModulesService),
  moduleController: asClass(ModuleController),
  _getAllModules: asClass(GetAllModules),
  _getModule: asClass(GetModule),
  _Create: asClass(CreateModule),
  _Delete: asClass(DeleteModule),
  _Update: asClass(UpdateModule),
});

export const moduleController =
  container.resolve<ModuleController>('moduleController');
