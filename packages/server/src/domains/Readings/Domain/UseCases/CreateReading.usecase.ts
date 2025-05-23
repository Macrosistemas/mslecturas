import { AppError, IUseCase } from '@server/Application';
import { ReadingsRepository } from '../Readings.repository';
import { ICreateReading } from '../Readings.interfaces';
import { Reading } from '../Readings.entity';

export class CreateReading implements IUseCase<Reading> {
  constructor(private readonly readingsRepository: ReadingsRepository) {}

  async execute({ input, requestContext }: ICreateReading): Promise<Reading> {
    const {
      id,
      numero_medidor,
      numero_cliente,
      denominacion_cliente,
      codigo_calle,
      denominacion_calle,
      altura,
      piso,
      dpto,
      fecha_lectura,
      fecha_lectura_ant,
      lectura,
      lectura_ant,
      bis,
      fecha_sincronizacion,
      id_usuario,
    } = input;
    const newReading = Reading.create({
      id,
      numero_medidor,
      numero_cliente,
      denominacion_cliente,
      codigo_calle,
      denominacion_calle,
      altura,
      piso,
      dpto,
      fecha_lectura,
      fecha_lectura_ant,
      lectura,
      lectura_ant,
      bis,
      fecha_sincronizacion,
      id_usuario,
    });
    const reading = await this.readingsRepository.create({
      reading: newReading,
      requestContext,
    });

    if (!reading) {
      throw new AppError('No se puede Ingresar Registro');
    }
    return reading;
  }
}
