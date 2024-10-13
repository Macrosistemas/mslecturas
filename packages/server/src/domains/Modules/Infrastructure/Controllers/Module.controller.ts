import { procedure, protectedProcedure } from '@server/Infrastructure';
import { ModulesService } from '../../Application';
import { executeService, executeServiceAlone } from '@server/Application';
import z from 'zod';

export class ModuleController {
  constructor(private modulesService: ModulesService) {}

  getModules = protectedProcedure.query(
    executeServiceAlone(
      this.modulesService.getAllModules.bind(this.modulesService),
    ),
  );

  getModule = protectedProcedure
    .input(z.number().min(1, 'ID is requerida'))
    .query(
      executeService(this.modulesService.getModule.bind(this.modulesService)),
    );

  createModule = procedure
    .input(
      z.object({
        id: z.number(),
        denominacion: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const response = await this.modulesService.createModule({
        input,
        requestContext: ctx.requestContext,
      });

      return response;
    });
  deleteModule = protectedProcedure
    .input(z.number().min(1, 'ID es requerida'))
    .mutation(
      executeService(
        this.modulesService.deleteModule.bind(this.modulesService),
      ),
    );

  updateModule = protectedProcedure
    .input(
      z.object({
        id: z.number(),
        denominacion: z.string(),
      }),
    )
    .mutation(
      executeService(
        this.modulesService.updateModule.bind(this.modulesService),
      ),
    );
}
