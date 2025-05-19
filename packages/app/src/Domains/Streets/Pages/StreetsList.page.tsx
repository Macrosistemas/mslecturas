import { StreetsList, SearchStreet, NewStreetButton } from '../Components';
import { Page } from '@app/Aplication/Components/Layout/Page';

export const StreetsListPage = () => {
  return (
    <Page title="Página de Calles" headerRight={<NewStreetButton />}>
      <div className="flex flex-col items-start gap-2">
        <SearchStreet />
        <StreetsList />
      </div>
    </Page>
  );
};
