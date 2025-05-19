import { DataTable } from '@app/Aplication/Components/Organisms/DataCollection/DataTable';
import { useGetStreets } from '../../Hooks';
import { columns } from './ColumnsStreetsTable';

export const StreetsList = () => {
  const { data, isLoading } = useGetStreets();

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
