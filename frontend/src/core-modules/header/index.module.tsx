import React from 'react';
import Logo from './logo.component';
import Toggle from './toggle.component';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';

interface ContainerProps {
  bg: string;
}

const Container = styled.div<ContainerProps>`
  background: ${(props: ContainerProps) => props.bg};
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  color: #202124;
  font-size: 14px;
  height: 64px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 200;
`;

const Header = () => {
  const theme = useSelector(themeSelector);

  return (
    <Container className="flex items-center" bg={theme.header.bg}>
      <Logo />
      <div className="mx-4 flex flex-1 justify-between">
        <p>Main</p>
      </div>
      <Toggle />
    </Container>
  );
};

export default Header;
