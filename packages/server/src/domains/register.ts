import { container } from '@server/utils/Container';
import { userApp } from './Users';
import { authApp } from './Auth';
import { permissionsApp } from './Permissions';
import { moduleApp } from './Modules';
import { readingApp } from './Readings';
import { streetApp } from './Streets';
export const registerDomains = () =>
  container.register({
    ...authApp,
    ...userApp,
    ...permissionsApp,
    ...moduleApp,
    ...readingApp,
    ...streetApp,
  });
