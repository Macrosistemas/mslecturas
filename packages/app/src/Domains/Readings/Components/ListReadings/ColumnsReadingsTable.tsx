import { ColumnDef } from '@tanstack/react-table';
import { ActionsReadings } from './ActionReadings';
import { TReading } from '../../Reading.entity';
import { formatDate } from '@app/Aplication/Helpers/formatInputDate';

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
    cell: ({ getValue }) => formatDate(getValue() as Date),
  },
  {
    accessorKey: 'fecha_lectura_ant',
    header: 'Fecha de Lectura Anterior',
    cell: ({ getValue }) => formatDate(getValue() as Date),
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
    header: 'Fecha Sincronización',
    cell: ({ getValue }) => formatDate(getValue() as Date),
  },
  {
    accessorKey: 'id_usuario',
    header: 'Id Usuario',
  },
  {
    accessorKey: 'actions',
    header: () => <div className="text-end">Acción</div>,
    cell: ActionsReadings,
  },
];
