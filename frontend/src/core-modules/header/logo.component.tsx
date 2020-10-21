import React from 'react';
import styled from '@emotion/styled';

import logo from '../../shared-module/assets/logo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 30px;
`;

const SiteTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  margin-left: 8px;
  font-size: 1.2rem;
`;

const Logo = () => {
  return (
    <Container>
      <Image src={logo} />
      <SiteTitle>Code Ninja</SiteTitle>
    </Container>
  );
};

export default Logo;
