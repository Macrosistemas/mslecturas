import { useURLParams } from '@app/Aplication/Hooks/useURLParams';
import { TReadingSearch } from '../Reading.entity';
import { ReadingsService } from '../Readings.service';

export const useGetReadings = () => {
  const { searchParams } = useURLParams<TReadingSearch>();

  return ReadingsService.getAll.useQuery(searchParams);
};
