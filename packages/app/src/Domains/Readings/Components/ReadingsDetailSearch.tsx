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
import { useGetReading } from '../Hooks';
import { READINGS_ROUTE } from '../Readings.routes';
import { toast } from 'sonner';

export const ReadingsDetailSearch = () => {
  const { id = '' } = useParams();
  const { currentReading, isError } = useGetReading(Number(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate(READINGS_ROUTE);
      toast.error('No se encontr� el Lecturas');
    }
  }, [isError, navigate]);

  if (isError) return null;

  return (
    <SheetContent className="flex flex-col gap-4 p-4">
      <SheetHeader className="text-left">
        <SheetTitle>Detalles de Lecturas</SheetTitle>
        <SheetDescription>Solo puedes ver el detalle.</SheetDescription>
      </SheetHeader>
      {currentReading ? (
        <Card className="p-4">
          <ul>
            <li>
              <span>Id: </span>
              <span>{currentReading.id}</span>
            </li>
            <li>
              <span>Numero Medidor: </span>
              <span>{currentReading.numero_medidor}</span>
            </li>
            <li>
              <span>Numero Cliente: </span>
              <span>{currentReading.numero_cliente}</span>
            </li>
            <li>
              <span>Denominacion Cliente: </span>
              <span>{currentReading.denominacion_cliente}</span>
            </li>
            <li>
              <span>Codigo de Calle: </span>
              <span>{currentReading.codigo_calle}</span>
            </li>
            <li>
              <span>Denominacion Calle: </span>
              <span>{currentReading.denominacion_calle}</span>
            </li>
            <li>
              <span>Altura: </span>
              <span>{currentReading.altura}</span>
            </li>
            <li>
              <span>Piso: </span>
              <span>{currentReading.piso}</span>
            </li>
            <li>
              <span>Dpto: </span>
              <span>{currentReading.dpto}</span>
            </li>
            <li>
              <span>Fecha de Lectura: </span>
              <span>{currentReading.fecha_lectura.toISOString()}</span>
            </li>
            <li>
              <span>Fecha de Lectura Anterior: </span>
              <span>{currentReading.fecha_lectura_ant.toISOString()}</span>
            </li>
            <li>
              <span>Lectura: </span>
              <span>{currentReading.lectura}</span>
            </li>
            <li>
              <span>Lectura Anterior: </span>
              <span>{currentReading.lectura_ant}</span>
            </li>
            <li>
              <span>Bis: </span>
              <span>{currentReading.bis}</span>
            </li>
            <li>
              <span>Fecha Sincronizaci�n: </span>
              <span>{currentReading.fecha_sincronizacion?.toString()}</span>
            </li>
            <li>
              <span>Id Usuario: </span>
              <span>{currentReading.id_usuario}</span>
            </li>
          </ul>
        </Card>
      ) : (
        <Skeleton className="h-[120px] w-full rounded-xl" />
      )}
    </SheetContent>
  );
};
