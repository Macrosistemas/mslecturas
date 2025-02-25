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
    private readonly _Create: CreateModule,
    private readonly _Delete: DeleteModule,
    private readonly _Update: UpdateModule,
    private readonly _getAllModules: GetAllModules,
    private readonly _getModule: GetModule,
  ) {}

  async createModule({
    input,
    requestContext,
  }: ICreateModule): Promise<Module | null> {
    return executeUseCase({
      useCase: this._Create,
      input,
      requestContext,
    });
  }
  async deleteModule({
    input,
    requestContext,
  }: IDeleteModule): Promise<number | null> {
    return executeUseCase({
      useCase: this._Delete,
      input,
      requestContext,
    });
  }
  async updateModule({
    input,
    requestContext,
  }: IUpdateModule): Promise<Module | null> {
    console.log('updateModule');
    return executeUseCase({
      useCase: this._Update,
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
