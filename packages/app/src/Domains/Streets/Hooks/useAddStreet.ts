import { toast } from 'sonner';
import { StreetsService } from '../Streets.service';
import { useCacheStreets } from './useCacheStreets';

export const useAddStreet = () => {
  const cacheStreetList = useCacheStreets();

  return StreetsService.create.useMutation({
    onMutate: async ({ denominacion }) => {
      cacheStreetList.cancel();
      const preservedState = cacheStreetList.getData();
      type TData = typeof preservedState;

      const setState = (state: TData): TData => [
        ...(state || []),
        {
          id: state?.length,
          denominacion,
        },
      ];

      cacheStreetList.setData(undefined, setState);
      return { preservedState };
    },
    onError: (_err, _variables, context) => {
      toast.error('Registro no agregado');
      cacheStreetList.setData(undefined, context?.preservedState);
    },
    onSuccess: () => {
      toast.success('Registro agregado');
      cacheStreetList.invalidate();
    },
  });
};
