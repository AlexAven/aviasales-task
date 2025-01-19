import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: content-box;
  width: 100%;
  /* max-width: 1240px; */
  max-width: 754px;
  margin: 0 auto;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: 232px 1fr;
  gap: 20px;
  grid-auto-rows: auto;
`;
