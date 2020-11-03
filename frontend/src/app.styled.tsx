/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface ContainerProps {
  bg: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props: ContainerProps) => props.bg};
`;

const StyledApp: FunctionComponent = ({ children }: PropsWithChildren<{}>) => {
  const theme = useSelector(themeSelector);

  return (
    <Container bg={theme.body.bg} className="flex flex-col w-screen h-screen">
      {children}
    </Container>
  );
};

export default StyledApp;
