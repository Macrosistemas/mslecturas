import { AppError, executeUseCase, IUseCase } from '@server/Application';
import { ReadingsRepository } from '../Readings.repository';
import { Reading } from '../Readings.entity';
import { ICreateReading } from '../Readings.interfaces';

export class CreateReading implements IUseCase<Reading | null> {
  constructor(
    private readonly readingsRepository: ReadingsRepository,
    private readonly _Create: CreateReading,
  ) {}

  async execute({ input, requestContext }: ICreateReading): Promise<Reading> {
    const reading = await executeUseCase({
      useCase: this._Create,
      input: {
        id: input.id,
        id_usuario: input.id_usuario,
        numero_medidor: input.numero_medidor,
        numero_cliente: input.numero_cliente,
        denominacion_cliente: input.denominacion_cliente,
        codigo_calle: input.codigo_calle,
        denominacion_calle: input.denominacion_calle,
        altura: input.altura,
        piso: input.piso,
        dpto: input.dpto,
        fecha_lectura: input.fecha_lectura,
        fecha_lectura_ant: input.fecha_lectura_ant,
        lectura: input.lectura,
        lectura_ant: input.lectura_ant,
        bis: input.bis,
        fecha_sincronizacion: input.fecha_sincronizacion,
      },
      requestContext,
    });
    if (!reading) {
      throw new AppError('No se puede Ingresar Registro');
    }
    return reading;
  }
}
