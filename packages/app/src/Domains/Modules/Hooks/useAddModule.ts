import { toast } from 'sonner';
import { ModulesService } from '../Modules.service';
import { useCacheModules } from './useCacheModules';

export const useAddModule = () => {
  const cacheModuleList = useCacheModules();

  return ModulesService.create.useMutation({
    onMutate: async ({ denominacion }) => {
      cacheModuleList.cancel();
      const preservedState = cacheModuleList.getData();
      console.log('preservedState:', preservedState);
      type TData = typeof preservedState;

      const setState = (state: TData): TData => [
        ...(state || []),
        {
          id: state?.length,
          denominacion,
        },
      ];
      console.log('setState:', setState);
      cacheModuleList.setData(undefined, setState);
      console.log('cacheModuleList:', cacheModuleList);
      return { preservedState };
    },
    onError: (_err, _variables, context) => {
      toast.error('Registro no agregado');
      cacheModuleList.setData(undefined, context?.preservedState);
    },
    onSuccess: () => {
      toast.success('Registro agregado');
      cacheModuleList.invalidate();
    },
  });
};
