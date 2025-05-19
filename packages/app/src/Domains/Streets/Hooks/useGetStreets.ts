import { useURLParams } from '@app/Aplication/Hooks/useURLParams';
import { TStreetSearch } from '../Street.entity';
import { StreetsService } from '../Streets.service';

export const useGetStreets = () => {
  const { searchParams } = useURLParams<TStreetSearch>();
  return StreetsService.getAll.useQuery(searchParams);
};
