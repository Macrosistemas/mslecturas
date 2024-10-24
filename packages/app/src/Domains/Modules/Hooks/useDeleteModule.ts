import { toast } from 'sonner';
import { ModulesService } from '../Modules.service';
import { useCacheModules } from './useCacheModules';

export const useDeleteModule = () => {
  const cacheModules = useCacheModules();

  return ModulesService.delete.useMutation({
    onMutate: () => toast.info('Eliminando registro'),
    onError: () => toast.error('No se pudo eliminar el registro'),
    onSuccess: () => {
      toast.success('registro eliminado');
      cacheModules.invalidate();
    },
  });
};
