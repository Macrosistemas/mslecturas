import { container } from '@server/utils/Container';
import { ModulesService } from './Application';
import { ModuleController } from './Infrastructure/Controllers/Module.controller';
import { asClass } from 'awilix';
import {
  GetAllModules,
  GetModule,
  CreateModule,
  DeleteModule,
  UpdateModule,
} from './Domain';
import { ModulesRepositoryImplementation } from './Infrastructure';

container.register({
  modulesRepository: asClass(ModulesRepositoryImplementation).scoped(),
  modulesService: asClass(ModulesService).scoped(),
  moduleController: asClass(ModuleController).scoped(),
  _getAllModules: asClass(GetAllModules).scoped(),
  _getModule: asClass(GetModule).scoped(),
  _Create: asClass(CreateModule).scoped(),
  _Delete: asClass(DeleteModule).scoped(),
  _Update: asClass(UpdateModule).scoped(),
});

export const moduleController =
  container.resolve<ModuleController>('moduleController');
