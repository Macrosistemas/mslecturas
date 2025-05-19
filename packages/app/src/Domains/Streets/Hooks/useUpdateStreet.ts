import { toast } from 'sonner';
import { StreetsService } from '../Streets.service';
import { useCacheStreets } from './useCacheStreets';

export const useUpdateStreet = () => {
  const cacheStreets = useCacheStreets();

  return StreetsService.update.useMutation({
    onMutate: () => toast.info('Actualizando registro'),
    onError: () => toast.error('No se pudo actualizar el registro'),
    onSuccess: () => {
      toast.success('Registro actualizado');
      cacheStreets.invalidate();
    },
  });
};
