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
  const [filterSearch, setFilterSearch] = useState(searchParams?.name || '');

  const to =
    (readingId && READINGS_SEARCH_DETAIL_ROUTE.replace(':id', readingId)) || '';

  const handleFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFilterSearch(value);
    updateDebouncedParams({ name: value });
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
