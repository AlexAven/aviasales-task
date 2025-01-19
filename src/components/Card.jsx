import styled from 'styled-components';

import FlightInfo from './FlightInfo';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  padding: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const Price = styled.h2`
  font-size: var(--fs-lg);
  font-weight: var(--fw-semi-bold);
  color: var(--colors-text-title);
`;

const AirlinesLogo = styled.img`
  display: block;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = () => {
  return (
    <Wrapper>
      <Title>
        <Price>12 400 Р</Price>
        <AirlinesLogo src="./src/assets/pictures/s7.png" alt="S7" />
      </Title>
      <Details>
        <FlightInfo />
        <FlightInfo />
      </Details>
    </Wrapper>
  );
};

export default Card;
