import React from 'react';
import Container from './container.styled';
import Logo from './logo.component';
import Main from './main.styled';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Main>
        <p>Main</p>
      </Main>
    </Container>
  );
};

export default Header;
