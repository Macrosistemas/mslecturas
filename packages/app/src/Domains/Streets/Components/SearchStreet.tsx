import React, { useState } from 'react';
import { Input } from '@app/Aplication/Components/ui/input';
import { Link, useMatch } from 'react-router-dom';
import { OutletSheet } from '@app/Aplication/Components';
import { Button } from '@app/Aplication/Components';

import { STREETS_ROUTE, STREETS_SEARCH_DETAIL_ROUTE } from '../Streets.routes';
import { useURLParams } from '@app/Aplication/Hooks/useURLParams';
import { TStreetSearch } from '../Street.entity';

export const SearchStreet = () => {
  const [streetId, setStreetId] = useState<string>('');
  const isInDetail = useMatch(STREETS_SEARCH_DETAIL_ROUTE);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(
    !!isInDetail || false,
  );
  // Initialize URL update params.
  const { searchParams, updateDebouncedParams } =
    useURLParams<TStreetSearch>(STREETS_ROUTE);
  const [filterSearch, setFilterSearch] = useState(
    searchParams?.denominacion || '',
  );

  const to =
    (streetId && STREETS_SEARCH_DETAIL_ROUTE.replace(':id', streetId)) || '';

  const handleFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFilterSearch(value);
    updateDebouncedParams({
      denominacion: value,
    });
  };

  return (
    <div className="flex w-full gap-4 items-stretch bg-white">
      <Input
        type="text"
        name="search"
        id=""
        value={streetId}
        onChange={({ target }) => setStreetId(target.value)}
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
        navigateToOnClose={STREETS_ROUTE}
      />
    </div>
  );
};
