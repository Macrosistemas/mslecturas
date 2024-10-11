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
  IGetReading,
  IUpdateReading,
  IGetReadings,
} from '../Domain';

export class ReadingsService {
  constructor(
    private readonly _createReading: CreateReading,
    private readonly _deleteReading: DeleteReading,
    private readonly _updateReading: UpdateReading,
    private readonly _getAllReadings: GetAllReadings,
    private readonly _getReading: GetReading,
  ) {}

  async createReading({
    input,
    requestContext,
  }: ICreateReading): Promise<Reading | null> {
    return executeUseCase({
      useCase: this._createReading,
      input,
      requestContext,
    });
  }

  async deleteReading({
    input,
    requestContext,
  }: IDeleteReading): Promise<number | null> {
    return executeUseCase({
      useCase: this._deleteReading,
      input,
      requestContext,
    });
  }

  async updateReading({
    input,
    requestContext,
  }: IUpdateReading): Promise<Reading> {
    return executeUseCase({
      useCase: this._updateReading,
      input,
      requestContext,
    });
  }

  async getAllReadings({
    input,
    requestContext,
  }: IGetReadings): Promise<Reading[]> {
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
