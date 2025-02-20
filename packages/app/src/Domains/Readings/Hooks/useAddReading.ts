import { toast } from 'sonner';
import { ReadingsService } from '../Readings.service';
import { useCacheReadings } from './useCacheReadings';

export const useAddReading = () => {
  const cacheReadingList = useCacheReadings();

  return ReadingsService.create.useMutation({
    onMutate: async ({
      numero_medidor,
      numero_cliente,
      denominacion_cliente,
      codigo_calle,
      denominacion_calle,
      altura,
      piso,
      dpto,
      fecha_lectura,
      fecha_lectura_ant,
      lectura,
      lectura_ant,
      bis,
      fecha_sincronizacion,
      id_usuario,
    }) => {
      cacheReadingList.cancel();
      const preservedState = cacheReadingList.getData();
      type TData = typeof preservedState;

      const setState = (state: TData): TData => [
        ...(state || []),
        {
          id: state?.length,
          numero_medidor,
          numero_cliente,
          denominacion_cliente,
          codigo_calle,
          denominacion_calle,
          altura,
          piso,
          dpto,
          fecha_lectura: new Date(fecha_lectura),
          fecha_lectura_ant: new Date(fecha_lectura_ant),
          lectura,
          lectura_ant,
          bis,
          fecha_sincronizacion: new Date(fecha_sincronizacion),
          id_usuario,
        },
      ];

      cacheReadingList.setData(undefined, setState);
      return { preservedState };
    },
    onError: (_err, _variables, context) => {
      toast.error('Registro no agregado');
      cacheReadingList.setData(undefined, context?.preservedState);
    },
    onSuccess: () => {
      toast.success('Registro agregado');
      cacheReadingList.invalidate();
    },
  });
};
