import { toast } from 'sonner';
import { ReadingsService } from '../Readings.service';
import { useCacheReadings } from './useCacheReadings';

export const useDeleteReading = () => {
  const cacheReadings = useCacheReadings();

  return ReadingsService.delete.useMutation({
    onMutate: () => toast.info('Eliminando registro'),
    onError: () => toast.error('No se pudo eliminar el registro'),
    onSuccess: () => {
      toast.success('registro eliminado');
      cacheReadings.invalidate();
    },
  });
};
