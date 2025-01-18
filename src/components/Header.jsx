import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  display: flex;
  justify-content: center;
`;

const Logo = styled.a.attrs({
  href: '/',
})``;

const Image = styled.img.attrs({
  src: './src/assets/pictures/logo.png',
})``;

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <Image />
      </Logo>
    </Wrapper>
  );
};

export default Header;
