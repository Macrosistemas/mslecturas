import { executeUseCase } from '@server/Application';
import {
  CreateReading,
  DeleteReading,
  GetAllReadings,
  GetReading,
  UpdateReading,
  Reading,
} from '../Domain';
import {
  ICreateReading,
  IDeleteReading,
  IGetAllReadings,
  IGetReading,
  IUpdateReading,
} from '../Domain';

export class ReadingsService {
  constructor(
    private readonly _Create: CreateReading,
    private readonly _Delete: DeleteReading,
    private readonly _Update: UpdateReading,
    private readonly _getAllReadings: GetAllReadings,
    private readonly _getReading: GetReading,
  ) {}

  async createReading({
    input,
    requestContext,
  }: ICreateReading): Promise<Reading | null> {
    return executeUseCase({
      useCase: this._Create,
      input,
      requestContext,
    });
  }
  async deleteReading({
    input,
    requestContext,
  }: IDeleteReading): Promise<number | null> {
    return executeUseCase({
      useCase: this._Delete,
      input,
      requestContext,
    });
  }
  async updateReading({
    input,
    requestContext,
  }: IUpdateReading): Promise<Reading | null> {
    return executeUseCase({
      useCase: this._Update,
      input,
      requestContext,
    });
  }

  async getAllReadings({
    input,
    requestContext,
  }: IGetAllReadings): Promise<Reading[]> {
    return executeUseCase({
      useCase: this._getAllReadings,
      input,
      requestContext,
    });
  }

  async getReading({
    input,
    requestContext,
  }: IGetReading): Promise<Reading | null> {
    return executeUseCase({ useCase: this._getReading, input, requestContext });
  }
}
