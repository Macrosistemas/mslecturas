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
import { useGetModule } from '../Hooks';
import { MODULES_ROUTE } from '../Modules.routes';
import { toast } from 'sonner';

export const ModulesDetailSearch = () => {
  const { id = '' } = useParams();
  const { currentModule, isError } = useGetModule(Number(id));
  console.log(id);
  const navigate = useNavigate();
  console.log(currentModule);
  useEffect(() => {
    if (isError) {
      navigate(MODULES_ROUTE);
      toast.error('No se encontr� el modulo');
    }
  }, [isError, navigate]);

  if (isError) return null;

  return (
    <SheetContent className="flex flex-col gap-4 p-4">
      <SheetHeader className="text-left">
        <SheetTitle>Detalles del Modulo</SheetTitle>
        <SheetDescription>Solo puedes ver el detalle.</SheetDescription>
      </SheetHeader>
      {currentModule ? (
        <Card className="p-4">
          <ul>
            <li>
              <span>Id: </span> <span>{currentModule.id}</span>
            </li>
            <li>
              <span>Denominaci�n: </span>{' '}
              <span>{currentModule.denominacion}</span>
            </li>
          </ul>
        </Card>
      ) : (
        <Skeleton className="h-[120px] w-full rounded-xl" />
      )}
    </SheetContent>
  );
};
