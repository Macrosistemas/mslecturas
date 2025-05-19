import { useEffect, useMemo, useState } from 'react';
import { StreetsService } from '../Streets.service';
import { TStreet, TStreetSearch } from '../Street.entity';
import { useCacheStreets } from './useCacheStreets';
import { useURLParams } from '@app/Aplication/Hooks/useURLParams';

export const useGetStreet = (id?: number) => {
  const { searchParams } = useURLParams<TStreetSearch>();
  const [currentStreet, setCurrentStreet] = useState<TStreet | null>(null);
  const queryStreetDetail = StreetsService.get.useQuery(id || 0, {
    enabled: false,
  });
  const cacheStreetsList = useCacheStreets();
  const { isFetched, isFetching, refetch } = queryStreetDetail;

  const cachedStreets = useMemo(
    () =>
      cacheStreetsList
        .getData(searchParams)
        ?.find((street) => street.id === id) || null,
    [cacheStreetsList, id, searchParams],
  );

  useEffect(() => {
    if (cachedStreets) {
      setCurrentStreet(cachedStreets);
    } else if (!isFetching && !isFetched) {
      refetch().then((res) => {
        setCurrentStreet(res.data || null);
      });
    }
  }, [id, isFetching, isFetched, refetch, cachedStreets]);

  return {
    currentStreet,
    ...queryStreetDetail,
  };
};
