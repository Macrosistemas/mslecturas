import { Page, Text } from '@app/Aplication';
import { Card } from '@app/Aplication/Components/ui/card';
import { StreetForm } from '../Components';
import { useGetStreet } from '../Hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { STREETS_ROUTE } from '../Streets.routes';
import { toast } from 'sonner';

export const StreetUpdatePage = () => {
  const { id } = useParams();
  const { currentStreet, isError, isLoading } = useGetStreet(Number(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate(STREETS_ROUTE);
      toast.error('No se encontró el registro');
    }
  }, [isError, navigate]);

  if (isError) return null;

  return (
    <Page title="Editar registro" size="small">
      {isLoading ? (
        <Text.Small>Buscando registro</Text.Small>
      ) : (
        <Card className="p-4">
          <StreetForm editData={currentStreet} />
        </Card>
      )}
    </Page>
  );
};
