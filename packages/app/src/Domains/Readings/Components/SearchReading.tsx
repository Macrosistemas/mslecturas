import React, { useState } from 'react';
import { Input } from '@app/Aplication/Components/ui/input';
import { Link, useMatch } from 'react-router-dom';
import { OutletSheet } from '@app/Aplication/Components';
import { Button } from '@app/Aplication/Components';

import {
  READINGS_ROUTE,
  READINGS_SEARCH_DETAIL_ROUTE,
} from '../Readings.routes';
import { useURLParams } from '@app/Aplication/Hooks/useURLParams';
import { TReadingSearch } from '../Reading.entity';

export const SearchReading = () => {
  const [readingId, setReadingId] = useState<string>('');
  const isInDetail = useMatch(READINGS_SEARCH_DETAIL_ROUTE);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(
    !!isInDetail || false,
  );
  // Initialize URL update params.
  const { searchParams, updateDebouncedParams } =
    useURLParams<TReadingSearch>(READINGS_ROUTE);
  const [filterSearch, setFilterSearch] = useState(
    //searchParams?.numero_medidor || '' ,
    //searchParams?.numero_cliente || '' ,
    searchParams?.denominacion_cliente || '',
    //searchParams?.codigo_calle || '' ,
    //searchParams?.denominacion_calle || '' ,
    //searchParams?.altura || '' ,
    //searchParams?.piso || '' ,
    //searchParams?.dpto || '' ,
    //searchParams?.fecha_lectura || '' ,
    //searchParams?.fecha_lectura_ant || '' ,
    //searchParams?.lectura || '' ,
    //searchParams?.lectura_ant || '' ,
    //searchParams?.bis || '' ,
    //searchParams?.fecha_sincronizacion || '' ,
    //searchParams?.id_usuario || '' ,
  );

  const to =
    (readingId && READINGS_SEARCH_DETAIL_ROUTE.replace(':id', readingId)) || '';

  const handleFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFilterSearch(value);
    updateDebouncedParams({
      //numero_medidor: value
      //, numero_cliente: value
      denominacion_cliente: value,
      // , codigo_calle: value
      //, denominacion_calle: value
      //, altura: value
      //, piso: value
      //, dpto: value
      //, fecha_lectura: value
      //, fecha_lectura_ant: value
      //, lectura: value
      //, lectura_ant: value
      //, bis: value
      //, fecha_sincronizacion: value
      //, id_usuario: value
    });
  };

  return (
    <div className="flex w-full gap-4 items-stretch bg-white">
      <Input
        type="text"
        name="search"
        id=""
        value={readingId}
        onChange={({ target }) => setReadingId(target.value)}
        className="max-w-[100px] "
        placeholder="ID a buscar"
      />
      <Link to={to}>
        <Button>Search</Button>
      </Link>
      <Input
        className="flex-auto w-full"
        type="text"
        name="filterName"
        onChange={handleFilter}
        value={filterSearch}
        placeholder="Escribe para filtrar por nombre"
      />

      <OutletSheet
        open={isSheetOpen}
        setIsSheetOpen={setIsSheetOpen}
        navigateToOnClose={READINGS_ROUTE}
      />
    </div>
  );
};
