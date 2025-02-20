import { AuthRouter } from '@app/Domains/Auth';
import { MainRouter } from '@app/Domains/Main';
import { ModulesRouter } from '@app/Domains/Modules';
import { ReadingsRouter } from '@app/Domains/Readings';
import { UsersRouter } from '@app/Domains/Users';

export const AllRoutes = [
  MainRouter,
  AuthRouter,
  UsersRouter,
  ModulesRouter,
  ReadingsRouter,
];
