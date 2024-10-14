import { procedure, protectedProcedure } from '@server/Infrastructure';
import { ReadingsService } from '../../Application';
import { executeService, executeServiceAlone } from '@server/Application';
import z from 'zod';

export class ReadingController {
  constructor(private readingsService: ReadingsService) {}

  getReadings = protectedProcedure.query(
    executeServiceAlone(
      this.readingsService.getAllReadings.bind(this.readingsService),
    ),
  );

  getReading = protectedProcedure
    .input(z.number().min(1, 'ID is requerida'))
    .query(
      executeService(
        this.readingsService.getReading.bind(this.readingsService),
      ),
    );

  createReading = procedure
    .input(
      z.object({
        id: z.number(),
        numero_medidor: z.number(),
        numero_cliente: z.number(),
        denominacion_cliente: z.string(),
        codigo_calle: z.number(),
        denominacion_calle: z.string(),
        altura: z.number(),
        piso: z.string(),
        dpto: z.string(),
        fecha_lectura: z.string().transform((val) => new Date(val)),
        fecha_lectura_ant: z.string().transform((val) => new Date(val)),
        lectura: z.number(),
        lectura_ant: z.number(),
        bis: z.string(),
        fecha_sincronizacion: z.string().transform((val) => new Date(val)),
        id_usuario: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const response = await this.readingsService.createReading({
        input,
        requestContext: ctx.requestContext,
      });

      return response;
    });
  deleteReading = protectedProcedure
    .input(z.number().min(1, 'ID es requerida'))
    .mutation(
      executeService(
        this.readingsService.deleteReading.bind(this.readingsService),
      ),
    );

  updateReading = protectedProcedure
    .input(
      z.object({
        id: z.number(),
        numero_medidor: z.number(),
        numero_cliente: z.number(),
        denominacion_cliente: z.string(),
        codigo_calle: z.number(),
        denominacion_calle: z.string(),
        altura: z.number(),
        piso: z.string(),
        dpto: z.string(),
        fecha_lectura: z.string().transform((val) => new Date(val)),
        fecha_lectura_ant: z.string().transform((val) => new Date(val)),
        lectura: z.number(),
        lectura_ant: z.number(),
        bis: z.string(),
        fecha_sincronizacion: z.string().transform((val) => new Date(val)),
        id_usuario: z.number(),
      }),
    )
    .mutation(
      executeService(
        this.readingsService.updateReading.bind(this.readingsService),
      ),
    );
}
