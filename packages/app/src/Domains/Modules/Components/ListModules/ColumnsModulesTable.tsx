import { ColumnDef } from '@tanstack/react-table';
import { ActionsModules } from './ActionModules';
import { TModule } from '../../Module.entity';

export const columns: ColumnDef<TModule>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'denominacion',
    header: 'Denominación',
  },
  {
    accessorKey: 'actions',
    header: () => <div className="text-end">Accion</div>,
    cell: ActionsModules,
  },
];
