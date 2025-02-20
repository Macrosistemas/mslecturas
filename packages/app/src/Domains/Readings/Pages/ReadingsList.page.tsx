import { ReadingsList, SearchReading, NewReadingButton } from '../Components';
import { Page } from '@app/Aplication/Components/Layout/Page';

export const ReadingsListPage = () => {
  return (
    <Page title="Página de Lecturas" headerRight={<NewReadingButton />}>
      <div className="flex flex-col items-start gap-2">
        <SearchReading />
        <ReadingsList />
      </div>
    </Page>
  );
};
