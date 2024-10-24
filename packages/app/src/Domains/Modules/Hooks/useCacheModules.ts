import { _modulesService } from '../Modules.service';

export const useCacheModules = () => _modulesService.useUtils().modules.getAll;
