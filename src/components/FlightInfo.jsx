import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Destination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Transfer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-weight: var(--fw-semi-bold);
  color: var(--colors-text-alt);
  letter-spacing: 0.5px;
  line-height: 18px;
`;

const Text = styled.p`
  font-size: var(--fs-md);
  font-weight: var(--fw-semi-bold);
  line-height: 21px;
`;

const FlightInfo = ({ origin, destination, date, stops, duration }) => {
  const transfers = stops?.join(', ');
  return (
    <Wrapper>
      <Destination>
        <Title>
          {origin} - {destination}
        </Title>
        <Text>
          {date} - {duration}
        </Text>
      </Destination>
      <Time>
        <Title>в пути</Title>
        <Text>{duration}</Text>
      </Time>
      <Transfer>
        <Title>Пересадки</Title>
        <Text>{transfers}</Text>
      </Transfer>
    </Wrapper>
  );
};

export default FlightInfo;
