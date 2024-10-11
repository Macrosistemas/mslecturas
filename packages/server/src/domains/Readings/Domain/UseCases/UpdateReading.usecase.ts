import { IUseCase } from '@server/Application';
import { Reading, IReadingInput } from '../Readings.entity';
import { ReadingsRepository } from '../Readings.repository';

export class UpdateReading implements IUseCase<Reading> {
  constructor(private readonly readingRepository: ReadingsRepository) {}

  async execute({
    id,
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
    fecha_sincronizacion,
  }: IReadingInput): Promise<Reading> {
    const newReading = new Reading(
      id,
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
      fecha_sincronizacion,
    );
    return await this.readingRepository.update(newReading);
  }
}
