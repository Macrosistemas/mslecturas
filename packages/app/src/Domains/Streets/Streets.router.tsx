import { Route } from 'react-router-dom';
import { StreetsListPage, StreetsNewPage, StreetUpdatePage } from './Pages';
import { StreetsDetailSearch } from './Components';
import {
  STREETS_ROUTE,
  STREETS_SEARCH_DETAIL_ROUTE,
  STREETS_NEW_ROUTE,
  STREETS_UPDATE,
} from './Streets.routes';

export const StreetsRouter = [
  <Route key="streets" path={STREETS_ROUTE} element={<StreetsListPage />}>
    <Route
      key="streets-detail"
      path={STREETS_SEARCH_DETAIL_ROUTE}
      element={<StreetsDetailSearch />}
    />
  </Route>,
  <Route
    key="streets-new"
    path={STREETS_NEW_ROUTE}
    element={<StreetsNewPage />}
  />,
  <Route
    key="street-update"
    path={STREETS_UPDATE}
    element={<StreetUpdatePage />}
  />,
];
