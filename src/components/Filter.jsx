import styled from 'styled-components';

import Checkbox from './Checkbox';

const Wrapper = styled.div`
  grid-row: span 2;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  padding: 20px 0 10px;
  box-shadow: var(--shadow);
  height: 252px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: var(--fw-semi-bold);
  padding: 0 20px 10px;
`;

const Filter = () => {
  return (
    <Wrapper>
      <Title>количество пересадок</Title>
      <Checkbox isChecked={false}>Все</Checkbox>
      <Checkbox isChecked={true}>Без пересадок</Checkbox>
      <Checkbox isChecked={true}>1 пересадка</Checkbox>
      <Checkbox isChecked={true}>2 пересадки</Checkbox>
      <Checkbox isChecked={true}>3 пересадки</Checkbox>
    </Wrapper>
  );
};

export default Filter;
