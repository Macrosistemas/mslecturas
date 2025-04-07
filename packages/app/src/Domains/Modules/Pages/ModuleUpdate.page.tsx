import { Page, Text } from '@app/Aplication';
import { Card } from '@app/Aplication/Components/ui/card';
import { ModuleForm } from '../Components';
import { useGetModule } from '../Hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { MODULES_ROUTE } from '../Modules.routes';
import { toast } from 'sonner';

export const ModuleUpdatePage = () => {
  const { id } = useParams();
  const { currentModule, isError, isLoading } = useGetModule(Number(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate(MODULES_ROUTE);
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
          <ModuleForm
            editData={
              currentModule && {
                id: currentModule.id,
                denominacion: currentModule.denominacion,
              }
            }
          />
        </Card>
      )}
    </Page>
  );
};
