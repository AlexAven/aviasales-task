import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`;

const List = ({ children }) => <Wrapper>{children}</Wrapper>;

export default List;
