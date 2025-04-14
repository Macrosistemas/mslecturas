import { useEffect, useMemo, useState } from 'react';
import { ReadingsService } from '../Readings.service';
import { TReading, TReadingSearch } from '../Reading.entity';
import { useCacheReadings } from './useCacheReadings';
import { useURLParams } from '@app/Aplication/Hooks/useURLParams';

export const useGetReading = (id?: number) => {
  const { searchParams } = useURLParams<TReadingSearch>();
  const [currentReading, setCurrentReading] = useState<TReading | null>(null);
  const queryReadingDetail = ReadingsService.get.useQuery(id || 0, {
    enabled: false,
  });
  const cacheReadingsList = useCacheReadings();
  const { isFetched, isFetching, refetch } = queryReadingDetail;

  const cachedReadings = useMemo(
    () =>
      cacheReadingsList
        .getData(searchParams)
        ?.find((reading) => reading.id === id) || null,
    [cacheReadingsList, id, searchParams],
  );

  useEffect(() => {
    if (cachedReadings) {
      setCurrentReading(cachedReadings);
    } else if (!isFetching && !isFetched) {
      refetch().then((res) => {
        setCurrentReading(res.data || null);
      });
    }
  }, [id, isFetching, isFetched, refetch, cachedReadings]);

  return {
    currentReading,
    ...queryReadingDetail,
  };
};
