import { AppError, IUseCase } from '@server/Application';
import { Reading } from '../Readings.entity';
import { ReadingsRepository } from '../Readings.repository';
import { IUpdateReading } from '../Readings.interfaces';

export class UpdateReading implements IUseCase<Reading> {
  constructor(private readonly readingsRepository: ReadingsRepository) {}

  async execute({ input, requestContext }: IUpdateReading): Promise<Reading> {
    const {
      id_usuario,
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
      id,
      fecha_sincronizacion,
    } = input;

    const updReading = Reading.create({
      id_usuario,
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
      id,
      fecha_sincronizacion,
    });

    const reading = await this.readingsRepository.update({
      reading: updReading,
      requestContext,
    });

    if (!reading) {
      throw new AppError('No se puede Ingresar Registro');
    }
    return reading;
  }
}
