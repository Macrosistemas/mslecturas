import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddStreet, useUpdateStreet } from '../Hooks';
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

import { STREETS_ROUTE } from '../Streets.routes';
import { useEffect } from 'react';
import { TStreet } from '../Street.entity';

interface StreetFormProps {
  editData?: TStreet | null;
}

export const StreetForm = ({ editData = null }: StreetFormProps) => {
  const { mutate } = useAddStreet();
  const { mutate: mutateUpdate } = useUpdateStreet();
  const navigate = useNavigate();

  const formSchema = z.object({
    id: z.number(),
    denominacion: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 0,
      denominacion: '',
    },
  });

  useEffect(() => {
    if (!editData) return;

    form.reset({
      denominacion: editData?.denominacion || '',
    });
  }, [editData, form]);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if (editData) {
      mutateUpdate({
        id: editData.id!,
        denominacion: values.denominacion,
      });
    } else {
      mutate({
        ...values,
      });
    }
    navigate(STREETS_ROUTE);
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
          name="denominacion"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Denominaci�n:</FormLabel>
              <FormControl>
                <Input {...field} className="block" />
              </FormControl>
              {!formState.errors.denominacion ? (
                <FormDescription>Denominaci�n a registrar</FormDescription>
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
