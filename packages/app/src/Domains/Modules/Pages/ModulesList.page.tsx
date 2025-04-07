import { ModulesList, SearchModule, NewModuleButton } from '../Components';
import { Page } from '@app/Aplication/Components/Layout/Page';

export const ModulesListPage = () => {
  return (
    <Page title="P�gina de Modulos" headerRight={<NewModuleButton />}>
      <div className="flex flex-col items-start gap-2">
        <SearchModule />
        <ModulesList />
      </div>
    </Page>
  );
};
