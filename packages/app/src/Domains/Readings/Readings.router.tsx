import { Route } from 'react-router-dom';
import { ReadingsListPage, ReadingsNewPage, ReadingUpdatePage } from './Pages';
import { ReadingsDetailSearch } from './Components';
import {
  READINGS_ROUTE,
  READINGS_SEARCH_DETAIL_ROUTE,
  READINGS_NEW_ROUTE,
  READINGS_UPDATE,
} from './Readings.routes';

export const ReadingsRouter = [
  <Route key="readings" path={READINGS_ROUTE} element={<ReadingsListPage />}>
    <Route
      key="readings-detail"
      path={READINGS_SEARCH_DETAIL_ROUTE}
      element={<ReadingsDetailSearch />}
    />
  </Route>,
  <Route
    key="readings-new"
    path={READINGS_NEW_ROUTE}
    element={<ReadingsNewPage />}
  />,
  <Route
    key="reading-update"
    path={READINGS_UPDATE}
    element={<ReadingUpdatePage />}
  />,
];
