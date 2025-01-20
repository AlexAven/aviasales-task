import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Checkbox from './Checkbox';
import { toggleFilter } from './filtersSlice';
import { applyFilters } from '../tickets/ticketsSlice';

const Wrapper = styled.div`
  grid-row: span 2;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  padding: 20px 0;
  box-shadow: var(--shadow);
  height: 252px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: var(--fw-semi-bold);
  padding: 0 20px 0;
`;

const Filter = () => {
  const dispatch = useDispatch();

  // Доступ к фильтрам и билетам из state
  const filters = useSelector((state) => state.filters.checkbox);
  const tickets = useSelector((state) => state.tickets.entities);

  const handleCheckboxChange = (filter) => {
    dispatch(toggleFilter({ filter }));

    // После смены фильтра, обновляем отфильтрованные билеты
    const updatedFilters = { ...filters, [filter]: !filters[filter] };
    dispatch(applyFilters({ filters: updatedFilters, tickets }));
  };

  return (
    <Wrapper>
      <Title>количество пересадок</Title>
      <Checkbox isChecked={filters.all} onChange={() => handleCheckboxChange('all')}>
        Все
      </Checkbox>
      <Checkbox isChecked={filters.noTrasfers} onChange={() => handleCheckboxChange('noTrasfers')}>
        Без пересадок
      </Checkbox>
      <Checkbox
        isChecked={filters.oneTransfer}
        onChange={() => handleCheckboxChange('oneTransfer')}
      >
        1 пересадка
      </Checkbox>
      <Checkbox
        isChecked={filters.twoTransfers}
        onChange={() => handleCheckboxChange('twoTransfers')}
      >
        2 пересадки
      </Checkbox>
      <Checkbox
        isChecked={filters.threeTransfers}
        onChange={() => handleCheckboxChange('threeTransfers')}
      >
        3 пересадки
      </Checkbox>
    </Wrapper>
  );
};

export default Filter;
