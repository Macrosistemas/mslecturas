import { useGetStreets } from '@app/Domains/Streets';
import { useMemo } from 'react';
import { SelectField } from '@app/Aplication/Components/Molecules/FormFields/SelectField';
import { Combobox } from '../Organisms';
import { Control, FieldValues, Path } from 'react-hook-form';

interface HelpStreetProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  handleClean: () => void;
}

export const HelpStreet = <T extends FieldValues>({
  name,
  control,
  handleClean,
}: HelpStreetProps<T>) => {
  const { data: StreetOptions } = useGetStreets();

  const options = useMemo(() => {
    return StreetOptions?.map((street) => ({
      value: street.id,
      label: `${street.denominacion}`,
    }));
  }, [StreetOptions]);

  return (
    <SelectField
      control={control}
      name={name}
      label="Calle:"
      combobox={<Combobox options={options} onChangeValue={handleClean} />}
      handleClean={handleClean}
    />
  );
};
