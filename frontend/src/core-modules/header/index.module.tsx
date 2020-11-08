import React from 'react';
import Logo from './logo.component';
import Toggle from './toggle.component';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';
import Search from './search.component';
import { clientSelector, DEVICE } from '@state/client.state';
import SearchMobile from './search-mobile.component';
import useSearch from './use-search.hook';

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
  z-index: 200;
`;

const Header = () => {
  const theme = useSelector(themeSelector);
  const client = useSelector(clientSelector);
  const searchProps = useSearch();

  if (client.device === DEVICE.MOBILE) {
    return (
      <>
        <Container
          className="flex items-center w-full relative"
          bg={theme.header.bg}
        >
          <Logo />
          <div className="flex flex-1" />
          <SearchMobile {...searchProps} />
          <Toggle />
        </Container>
        {/*Placeholder div that occupies the DOM space below the header*/}
        <div className="w-full" style={{ height: '64px' }} />
      </>
    );
  }

  return (
    <>
      <Container className="flex items-center w-full" bg={theme.header.bg}>
        <Logo />
        <div className="mx-8 flex flex-1 justify-between relative">
          <div />
          <Search {...searchProps} />
        </div>
        <Toggle />
      </Container>
      {/*Placeholder div that occupies the DOM space below the header*/}
      <div className="w-full" style={{ height: '64px' }} />
    </>
  );
};

export default Header;
