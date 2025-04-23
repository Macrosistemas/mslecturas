import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddReading, useUpdateReading } from '../Hooks';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@app/Aplication/Components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@app/Aplication/Components/ui/input';
import { Button, Container } from '@app/Aplication/Components';

import { READINGS_ROUTE } from '../Readings.routes';
import { useEffect } from 'react';
import { TReading } from '../Reading.entity';
import { formatInputDate } from '@app/Aplication/Helpers/formatInputDate';

interface ReadingFormProps {
  editData?: TReading | null;
}

export const ReadingForm = ({ editData = null }: ReadingFormProps) => {
  const { mutate } = useAddReading();
  const { mutate: mutateUpdate } = useUpdateReading();
  const navigate = useNavigate();

  const formSchema = z.object({
    id: z.number(),
    numero_medidor: z.coerce.number().min(1, 'El valor debe ser mayor a 1'),
    numero_cliente: z.coerce.number().min(1, 'El valor debe ser mayor a 1'),
    denominacion_cliente: z.string(),
    codigo_calle: z.coerce.number().min(1, 'El valor debe ser mayor a 1'),
    denominacion_calle: z.string(),
    altura: z.coerce.number().min(1, 'El valor debe ser mayor a 1'),
    piso: z.string(),
    dpto: z.string(),
    fecha_lectura: z.string().min(1, 'Ingrese una fecha'),
    fecha_lectura_ant: z.string().min(1, 'Ingrese una fecha'),
    lectura: z.coerce.number().min(1, 'El valor debe ser mayor a 1'),
    lectura_ant: z.coerce.number().min(1, 'El valor debe ser mayor a 1'),
    bis: z.string(),
    fecha_sincronizacion: z.string().min(1, 'Ingrese una fecha'),
    id_usuario: z.coerce.number().min(1, 'El valor debe ser mayor a 1'),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 0,
      numero_medidor: 0,
      numero_cliente: 0,
      denominacion_cliente: '',
      codigo_calle: 0,
      denominacion_calle: '',
      altura: 0,
      piso: '',
      dpto: '',
      fecha_lectura: formatInputDate(new Date()),
      fecha_lectura_ant: formatInputDate(new Date()),
      lectura: 0,
      lectura_ant: 0,
      bis: '',
      fecha_sincronizacion: formatInputDate(new Date()),
      id_usuario: 0,
    },
  });

  useEffect(() => {
    if (!editData) return;

    form.setValue('numero_medidor', editData?.numero_medidor);
    form.setValue('numero_cliente', editData?.numero_cliente);
    form.setValue('denominacion_cliente', editData?.denominacion_cliente);
    form.setValue('codigo_calle', editData?.codigo_calle);
    form.setValue('denominacion_calle', editData?.denominacion_calle);
    form.setValue('altura', editData?.altura);
    form.setValue('piso', editData?.piso);
    form.setValue('dpto', editData?.dpto);
    form.setValue('fecha_lectura', formatInputDate(editData.fecha_lectura));
    form.setValue(
      'fecha_lectura_ant',
      formatInputDate(editData?.fecha_lectura_ant),
    );
    form.setValue('lectura', editData?.lectura);
    form.setValue('lectura_ant', editData?.lectura_ant);
    form.setValue('bis', editData?.bis);
    form.setValue(
      'fecha_sincronizacion',
      formatInputDate(editData?.fecha_sincronizacion || new Date(0)),
    );
    form.setValue('id_usuario', editData?.id_usuario);
  }, [editData, form]);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const fecha_lectura = values.fecha_lectura.toString();
    const fecha_lectura_ant = values.fecha_lectura_ant.toString();
    const fecha_sincronizacion = values.fecha_sincronizacion.toString();

    if (editData) {
      mutateUpdate({
        id: editData.id!,
        numero_medidor: values.numero_medidor,
        numero_cliente: values.numero_cliente,
        denominacion_cliente: values.denominacion_cliente,
        codigo_calle: values.codigo_calle,
        denominacion_calle: values.denominacion_calle,
        altura: values.altura,
        piso: values.piso,
        dpto: values.dpto,
        fecha_lectura,
        fecha_lectura_ant,
        lectura: values.lectura,
        lectura_ant: values.lectura_ant,
        bis: values.bis,
        fecha_sincronizacion,
        id_usuario: values.id_usuario,
      });
    } else {
      mutate({
        ...values,
        fecha_lectura,
        fecha_lectura_ant,
        fecha_sincronizacion,
      });
    }
    navigate(READINGS_ROUTE);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate(-1);
  };

  const { formState } = form;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 m-auto"
      >
        <FormField
          name="numero_medidor"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero Medidor</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              {!formState.errors.numero_medidor ? (
                <FormDescription>Numero Medidor a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="numero_cliente"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero Cliente</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              {!formState.errors.numero_cliente ? (
                <FormDescription>Numero Cliente a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="denominacion_cliente"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Denominacion Cliente</FormLabel>
              <FormControl>
                <Input {...field} className="block" />
              </FormControl>
              {!formState.errors.denominacion_cliente ? (
                <FormDescription>
                  Denominacion Cliente a registrar
                </FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="codigo_calle"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Codigo de Calle</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              {!formState.errors.codigo_calle ? (
                <FormDescription>Codigo de Calle a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="denominacion_calle"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Denominacion Calle</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {!formState.errors.denominacion_calle ? (
                <FormDescription>
                  Denominacion Calle a registrar
                </FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="altura"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Altura</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              {!formState.errors.altura ? (
                <FormDescription>Altura a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="piso"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Piso</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {!formState.errors.piso ? (
                <FormDescription>Piso a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="dpto"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dpto</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {!formState.errors.dpto ? (
                <FormDescription>Dpto a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        *{' '}
        <FormField
          name="fecha_lectura"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Lectura :</FormLabel>
              <FormControl>
                <Input type="date" {...field} className="block" />
              </FormControl>
              {!formState.errors.fecha_lectura ? (
                <FormDescription>Fecha de Lectura a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="fecha_lectura_ant"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Lectura Anterior</FormLabel>
              <FormControl>
                <Input type="date" {...field} className="block" />
              </FormControl>
              {!formState.errors.fecha_lectura_ant ? (
                <FormDescription>
                  Fecha de Lectura Anterior a registrar
                </FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="lectura"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lectura</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              {!formState.errors.lectura ? (
                <FormDescription>Lectura a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="lectura_ant"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lectura Anterior</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              {!formState.errors.lectura_ant ? (
                <FormDescription>Lectura Anterior a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="bis"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bis</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {!formState.errors.bis ? (
                <FormDescription>Bis a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="fecha_sincronizacion"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha Sincronizaci�n</FormLabel>
              <FormControl>
                <Input type="date" {...field} className="block" />
              </FormControl>
              {!formState.errors.fecha_sincronizacion ? (
                <FormDescription>
                  Fecha Sincronización a registrar
                </FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="id_usuario"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Id Usuario</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {!formState.errors.id_usuario ? (
                <FormDescription>Id Usuario a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <Container row justify="end">
          <Button appearance="cancel" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" appearance="save" />
        </Container>
      </form>
    </Form>
  );
};
