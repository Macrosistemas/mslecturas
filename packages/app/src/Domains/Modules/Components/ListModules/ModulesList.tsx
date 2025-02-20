import { DataTable } from '@app/Aplication/Components/Organisms/DataCollection/DataTable';
import { useGetModules } from '../../Hooks';
import { columns } from './ColumnsModulesTable';

export const ModulesList = () => {
  const { data, isLoading } = useGetModules();

  return (
    <>
      {isLoading ? (
        <DataTable.Skeleton />
      ) : (
        <div className="w-full">
          <DataTable columns={columns} data={data || []} />
        </div>
      )}
    </>
  );
};
