import { useEffect } from 'react';
import { Card } from '@app/Aplication/Components/ui/card';
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@app/Aplication/Components/ui/sheet';
import { Skeleton } from '@app/Aplication/Components/ui/skeleton';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetStreet } from '../Hooks';
import { STREETS_ROUTE } from '../Streets.routes';
import { toast } from 'sonner';

export const StreetsDetailSearch = () => {
  const { id = '' } = useParams();
  const { currentStreet, isError } = useGetStreet(Number(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate(STREETS_ROUTE);
      toast.error('No se encontr� el Calles');
    }
  }, [isError, navigate]);

  if (isError) return null;

  return (
    <SheetContent className="flex flex-col gap-4 p-4">
      <SheetHeader className="text-left">
        <SheetTitle>Detalles de Calles</SheetTitle>
        <SheetDescription>Solo puedes ver el detalle.</SheetDescription>
      </SheetHeader>
      {currentStreet ? (
        <Card className="p-4">
          <ul>
            <li>
              <span>Id: </span>
              <span>{currentStreet.id}</span>
            </li>
            <li>
              <span>Denominaci�n: </span>
              <span>{currentStreet.denominacion}</span>
            </li>
          </ul>
        </Card>
      ) : (
        <Skeleton className="h-[120px] w-full rounded-xl" />
      )}
    </SheetContent>
  );
};
