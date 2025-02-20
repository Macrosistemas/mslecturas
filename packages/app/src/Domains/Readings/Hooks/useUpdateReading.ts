import { toast } from 'sonner';
import { ReadingsService } from '../Readings.service';
import { useCacheReadings } from './useCacheReadings';

export const useUpdateReading = () => {
  const cacheReadings = useCacheReadings();

  return ReadingsService.update.useMutation({
    onMutate: () => toast.info('Actualizando registro'),
    onError: () => toast.error('No se pudo actualizar el registro'),
    onSuccess: () => {
      toast.success('Registro actualizado');
      cacheReadings.invalidate();
    },
  });
};
