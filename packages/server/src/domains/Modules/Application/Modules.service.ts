import { executeUseCase } from '@server/Application';
import {
  CreateModule,
  DeleteModule,
  GetAllModules,
  GetModule,
  UpdateModule,
  Module,
} from '../Domain';
import {
  ICreateModule,
  IDeleteModule,
  IGetAllModules,
  IGetModule,
  IUpdateModule,
} from '../Domain';

export class ModulesService {
  constructor(
    private readonly _create: CreateModule,
    private readonly _delete: DeleteModule,
    private readonly _update: UpdateModule,
    private readonly _getAllModules: GetAllModules,
    private readonly _getModule: GetModule,
  ) {}

  async createModule({
    input,
    requestContext,
  }: ICreateModule): Promise<Module | null> {
    return executeUseCase({
      useCase: this._create,
      input,
      requestContext,
    });
  }
  async deleteModule({
    input,
    requestContext,
  }: IDeleteModule): Promise<number | null> {
    return executeUseCase({
      useCase: this._delete,
      input,
      requestContext,
    });
  }
  async updateModule({
    input,
    requestContext,
  }: IUpdateModule): Promise<Module | null> {
    return executeUseCase({
      useCase: this._update,
      input,
      requestContext,
    });
  }

  async getAllModules({
    input,
    requestContext,
  }: IGetAllModules): Promise<Module[]> {
    return executeUseCase({
      useCase: this._getAllModules,
      input,
      requestContext,
    });
  }

  async getModule({
    input,
    requestContext,
  }: IGetModule): Promise<Module | null> {
    return executeUseCase({ useCase: this._getModule, input, requestContext });
  }
}
