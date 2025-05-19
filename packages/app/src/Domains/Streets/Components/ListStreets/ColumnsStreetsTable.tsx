import { ColumnDef } from '@tanstack/react-table';
import { ActionsStreets } from './ActionStreets';
import { TStreet } from '../../Street.entity';

export const columns: ColumnDef<TStreet>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'denominacion',
    header: 'Denominaci�n',
  },
  {
    accessorKey: 'actions',
    header: () => <div className="text-end">Acci�n</div>,
    cell: ActionsStreets,
  },
];
