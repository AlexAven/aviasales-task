import styled from "styled-components";

const Wrapper = styled.section`
  background-color: orange;
  height: 200px;
`;

const List = ({ children }) => {
  return (
    <Wrapper>
      3333333333333
      {children}
    </Wrapper>
  );
};

export default List;
