import { toast } from 'sonner';
import { StreetsService } from '../Streets.service';
import { useCacheStreets } from './useCacheStreets';

export const useDeleteStreet = () => {
  const cacheStreets = useCacheStreets();

  return StreetsService.delete.useMutation({
    onMutate: () => toast.info('Eliminando registro'),
    onError: () => toast.error('No se pudo eliminar el registro'),
    onSuccess: () => {
      toast.success('registro eliminado');
      cacheStreets.invalidate();
    },
  });
};
