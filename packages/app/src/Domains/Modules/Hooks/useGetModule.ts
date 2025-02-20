import { useEffect, useMemo, useState } from 'react';
import { ModulesService } from '../Modules.service';
import { TModule, TModuleSearch } from '../Module.entity';
import { useCacheModules } from './useCacheModules';
import { useURLParams } from '@app/Aplication/Hooks/useURLParams';

export const useGetModule = (id?: number) => {
  const { searchParams } = useURLParams<TModuleSearch>();
  const [currentModule, setCurrentModule] = useState<TModule | null>(null);
  const queryModuleDetail = ModulesService.get.useQuery(id || 0, {
    enabled: false,
  });
  console.log('searchParams');
  console.log(searchParams);

  const cacheModulesList = useCacheModules();
  console.log('cacheModulesList');
  console.log(cacheModulesList);
  const { isFetched, isFetching, refetch } = queryModuleDetail;
  console.log('useGetModule:id');
  console.log(id);
  const cachedModules = useMemo(
    () =>
      cacheModulesList
        .getData(searchParams)
        ?.find((module) => module.id === id) || null,
    [cacheModulesList, id, searchParams],
  );
  console.log('cachedModules');
  console.log(cachedModules);
  useEffect(() => {
    if (cachedModules) {
      setCurrentModule(cachedModules);
    } else if (!isFetching && !isFetched) {
      refetch().then((res) => {
        setCurrentModule(res.data || null);
      });
    }
  }, [id, isFetching, isFetched, refetch, cachedModules]);

  return {
    currentModule,
    ...queryModuleDetail,
  };
};
