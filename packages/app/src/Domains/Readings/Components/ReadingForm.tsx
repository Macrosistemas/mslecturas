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

interface ReadingFormProps {
  editData?: TReading | null;
}

export const ReadingForm = ({ editData = null }: ReadingFormProps) => {
  const { mutate } = useAddReading();
  const { mutate: mutateUpdate } = useUpdateReading();
  const navigate = useNavigate();

  const formSchema = z.object({
    id: z.number(),
    numero_medidor: z.number(),
    numero_cliente: z.number(),
    denominacion_cliente: z.string(),
    codigo_calle: z.number(),
    denominacion_calle: z.string(),
    altura: z.number(),
    piso: z.string(),
    dpto: z.string(),
    fecha_lectura: z.date(),
    fecha_lectura_ant: z.date(),
    lectura: z.number(),
    lectura_ant: z.number(),
    bis: z.string(),
    fecha_sincronizacion: z.date(),
    id_usuario: z.number(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      denominacion_cliente: '',
      denominacion_calle: '',
      piso: '',
      dpto: '',
      bis: '',
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
    form.setValue('fecha_lectura', editData?.fecha_lectura);
    form.setValue('fecha_lectura_ant', editData?.fecha_lectura_ant);
    form.setValue('lectura', editData?.lectura);
    form.setValue('lectura_ant', editData?.lectura_ant);
    form.setValue('bis', editData?.bis);
    //  form.setValue('fecha_sincronizacion', editData?.fecha_sincronizacion);
    form.setValue('id_usuario', editData?.id_usuario);
  }, [editData, form]);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if (editData) {
      mutateUpdate({
        id: values.id,
        numero_medidor: values.numero_medidor,
        numero_cliente: values.numero_cliente,
        denominacion_cliente: values.denominacion_cliente,
        codigo_calle: values.codigo_calle,
        denominacion_calle: values.denominacion_calle,
        altura: values.altura,
        piso: values.piso,
        dpto: values.dpto,
        fecha_lectura: values.fecha_lectura,
        fecha_lectura_ant: values.fecha_lectura_ant,
        lectura: values.lectura,
        lectura_ant: values.lectura_ant,
        bis: values.bis,
        fecha_sincronizacion: values.fecha_sincronizacion,
        id_usuario: values.id_usuario,
      });
    } else {
      mutate(values);
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
          name="id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Id</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {!formState.errors.id ? (
                <FormDescription>Id a registrar</FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="numero_medidor"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero Medidor</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
        <FormField
          name="fecha_lectura"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Lectura</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              {!formState.errors.fecha_sincronizacion ? (
                <FormDescription>
                  Fecha Sincronizaci�n a registrar
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
