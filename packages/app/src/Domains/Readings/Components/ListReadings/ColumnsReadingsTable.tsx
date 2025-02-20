import { ColumnDef } from '@tanstack/react-table';
import { ActionsReadings } from './ActionReadings';
import { TReading } from '../../Reading.entity';

export const columns: ColumnDef<TReading>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'numero_medidor',
    header: 'Numero Medidor',
  },
  {
    accessorKey: 'numero_cliente',
    header: 'Numero Cliente',
  },
  {
    accessorKey: 'denominacion_cliente',
    header: 'Denominacion Cliente',
  },
  {
    accessorKey: 'codigo_calle',
    header: 'Codigo de Calle',
  },
  {
    accessorKey: 'denominacion_calle',
    header: 'Denominacion Calle',
  },
  {
    accessorKey: 'altura',
    header: 'Altura',
  },
  {
    accessorKey: 'piso',
    header: 'Piso',
  },
  {
    accessorKey: 'dpto',
    header: 'Dpto',
  },
  {
    accessorKey: 'fecha_lectura',
    header: 'Fecha de Lectura',
  },
  {
    accessorKey: 'fecha_lectura_ant',
    header: 'Fecha de Lectura Anterior',
  },
  {
    accessorKey: 'lectura',
    header: 'Lectura',
  },
  {
    accessorKey: 'lectura_ant',
    header: 'Lectura Anterior',
  },
  {
    accessorKey: 'bis',
    header: 'Bis',
  },
  {
    accessorKey: 'fecha_sincronizacion',
    header: 'Fecha Sincronizaci�n',
  },
  {
    accessorKey: 'id_usuario',
    header: 'Id Usuario',
  },
  {
    accessorKey: 'actions',
    header: () => <div className="text-end">Acci�n</div>,
    cell: ActionsReadings,
  },
];
