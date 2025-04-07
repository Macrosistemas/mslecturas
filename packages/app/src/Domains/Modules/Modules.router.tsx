import { Route } from 'react-router-dom';
import { ModulesListPage, ModulesNewPage, ModuleUpdatePage } from './Pages';
import { ModulesDetailSearch } from './Components';
import {
  MODULES_ROUTE,
  MODULES_SEARCH_DETAIL_ROUTE,
  MODULES_NEW_ROUTE,
  MODULES_UPDATE,
} from './Modules.routes';

export const ModulesRouter = [
  <Route key="modules" path={MODULES_ROUTE} element={<ModulesListPage />}>
    <Route
      key="modules-detail"
      path={MODULES_SEARCH_DETAIL_ROUTE}
      element={<ModulesDetailSearch />}
    />
  </Route>,
  <Route
    key="modules-new"
    path={MODULES_NEW_ROUTE}
    element={<ModulesNewPage />}
  />,
  <Route
    key="module-update"
    path={MODULES_UPDATE}
    element={<ModuleUpdatePage />}
  />,
];
