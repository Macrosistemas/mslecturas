import { ReadingForm } from '../Components';
import { Page } from '@app/Aplication/Components';
import { Card } from '@app/Aplication/Components/ui/card';

export const ReadingsNewPage = () => (
  <Page title="Nuevo registro" size="small">
    <Card className="p-4">
      <ReadingForm />
    </Card>
  </Page>
);
