import { TModuleRouter } from '@server/domains/Modules';
import { createTRPCReact } from '@trpc/react-query';

export const _modulesService = createTRPCReact<TModuleRouter>();
export const ModulesService = _modulesService.modules;
