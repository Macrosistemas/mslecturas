import { IRequestContext } from '@server/Application';
import { Module } from './Modules.entity';

export interface IGetModulesRepository extends IRequestContext {
  filters?: {
    id?: number;
    denominacion?: string;
  };
}
export interface ICreateModuleRepository extends IRequestContext {
  module: Module;
}
export interface IGetModuleRepository extends IRequestContext {
  id: number;
}
export interface IUpdateModuleRepository extends IRequestContext {
  module: Module;
}
export interface IDeleteModuleRepository extends IRequestContext {
  id: number;
}
export interface ModulesRepository {
  getAllModules(params: IGetModulesRepository): Promise<Module[]>;
  create(params: ICreateModuleRepository): Promise<Module | null>;
  update(params: IUpdateModuleRepository): Promise<number | null>;
  delete(params: IDeleteModuleRepository): Promise<number | null>;
  getModule(params: IGetModuleRepository): Promise<Module | null>;
}
