import { toast } from 'sonner';
import { ModulesService } from '../Modules.service';
import { useCacheModules } from './useCacheModules';

export const useUpdateModule = () => {
  const cacheModules = useCacheModules();

  return ModulesService.update.useMutation({
    onMutate: () => toast.info('Actualizando registro'),
    onError: () => toast.error('No se pudo actualizar el registro'),
    onSuccess: () => {
      toast.success('Registro actualizado');
      cacheModules.invalidate();
    },
  });
};
