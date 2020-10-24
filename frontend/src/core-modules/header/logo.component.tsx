import React from 'react';
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

interface SiteTitleProps {
  text: string;
}

const SiteTitle = styled.h1<SiteTitleProps>`
  font-weight: 500;
  margin-left: 8px;
  font-size: 1.2rem;
  font-family: 'Quicksand', sans-serif;
  color: ${(props: SiteTitleProps) => props.text};
`;

const Logo = () => {
  const theme = useSelector(themeSelector);

  return (
    <Container>
      <svg
        height="30"
        viewBox="0 0 348 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M174 0L0.833984 61.752L27.246 290.718L174 372L320.754 290.718L347.166 61.752L174 0Z"
          fill={theme.header.logo.primary}
        />
        <path
          d="M174 36V69.3V69.15V221.1V336L296.884 270.45L319 85.8L174 36Z"
          fill={theme.header.logo.secondary}
        />
      </svg>
      <SiteTitle text={theme.header.text}>Code Ninja</SiteTitle>
    </Container>
  );
};

export default Logo;
