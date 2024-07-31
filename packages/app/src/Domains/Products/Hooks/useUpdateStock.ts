import { ProductsServices } from '../Services';

export const useUpdateStock = () => {
  //**  Accedo a los datos almacenados en tRPC. */
  const cacheProductsList = ProductsServices.useUtils().getProducts;

  const mutationStock = ProductsServices.updateStock.useMutation({
    onMutate: async ({ id, stock }) => {
      cacheProductsList.cancel();
      const preservedState = cacheProductsList.getData() || [];
      const newState = [...preservedState];
      const productIndex = preservedState?.findIndex((p) => p.id === id);

      newState[productIndex].stock = stock;

      cacheProductsList.setData(undefined, newState);
      return { preservedState };
    },
    onError: (_err, _variables, context) => {
      cacheProductsList.setData(undefined, context?.preservedState);
    },
    onSuccess: () => {
      cacheProductsList.invalidate();
    },
  });

  const handleStockChange =
    (id: string) =>
    ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
      mutationStock.mutate({ id, stock: Number(value) });

  return { mutationStock, handleStockChange };
};