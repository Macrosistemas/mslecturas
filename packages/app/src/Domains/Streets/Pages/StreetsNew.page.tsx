import { StreetForm } from '../Components';
import { Page } from '@app/Aplication/Components';
import { Card } from '@app/Aplication/Components/ui/card';

export const StreetsNewPage = () => (
  <Page title="Nuevo registro" size="small" backButton>
    <Card className="p-4">
      <StreetForm />
    </Card>
  </Page>
);
