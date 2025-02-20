import { TModulesRouter } from '@server/domains/Modules';
import { createTRPCReact } from '@trpc/react-query';

export const _modulesService = createTRPCReact<TModulesRouter>();
export const ModulesService = _modulesService.modules;
