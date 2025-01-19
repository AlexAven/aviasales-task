import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 31px;

  display: flex;
  justify-content: center;
`;

const Logo = styled.a.attrs({
  href: '/',
})``;

const Image = styled.img.attrs({
  src: './src/assets/pictures/logo.svg',
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
