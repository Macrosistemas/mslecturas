import { useURLParams } from '@app/Aplication/Hooks/useURLParams';
import { TModuleSearch } from '../Module.entity';
import { ModulesService } from '../Modules.service';

export const useGetModules = () => {
  const { searchParams } = useURLParams<TModuleSearch>();
  // const { denominacion } = searchParams || {};

  return ModulesService.getAll.useQuery(searchParams);
};
