import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlise';
import { FilterLabel, FilterInput, WrapperFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = event => {
    const newFilterValue = event.target.value;
    dispatch(changeFilter(newFilterValue));
  };

  return (
    <WrapperFilter>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={handleFilterChange} />
      </FilterLabel>
    </WrapperFilter>
  );
};