import { IRequestContext } from '@server/Application';
export interface IGetAllModules extends IRequestContext {
  input?: {
    denominacion: string;
  };
}
export interface ICreateModule extends IRequestContext {
  input: {
    denominacion: string;
    id?: number;
  };
}
export interface IGetModule extends IRequestContext {
  input: number;
}
export interface IUpdateModule extends IRequestContext {
  input: {
    id: number;
    denominacion: string;
  };
}
export interface IDeleteModule extends IRequestContext {
  input: number;
}
export interface IModule {
  denominacion: string;
  id?: number;
}
