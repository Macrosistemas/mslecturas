import { Page, Text } from '@app/Aplication';
import { Card } from '@app/Aplication/Components/ui/card';
import { ReadingForm } from '../Components';
import { useGetReading } from '../Hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { READINGS_ROUTE } from '../Readings.routes';
import { toast } from 'sonner';

export const ReadingUpdatePage = () => {
  const { id } = useParams();
  const { currentReading, isError, isLoading } = useGetReading(Number(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate(READINGS_ROUTE);
      toast.error('No se encontr� el registro');
    }
  }, [isError, navigate]);

  if (isError) return null;

  return (
    <Page title="Editar registro" size="small">
      {isLoading ? (
        <Text.Small>Buscando registro</Text.Small>
      ) : (
        <Card className="p-4">
          <ReadingForm editData={currentReading} />
        </Card>
      )}
    </Page>
  );
};
