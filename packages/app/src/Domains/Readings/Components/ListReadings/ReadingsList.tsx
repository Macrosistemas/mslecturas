import { DataTable } from '@app/Aplication/Components/Organisms/DataCollection/DataTable';
import { useGetReadings } from '../../Hooks';
import { columns } from './ColumnsReadingsTable';

export const ReadingsList = () => {
  const { data, isLoading } = useGetReadings();

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
