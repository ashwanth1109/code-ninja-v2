/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';
import type { FunctionComponent, PropsWithChildren } from 'react';

// TODO: add types to package
// @ts-ignore
import useClientDimensions from 'react-client-dimensions';
import { update } from '@state/client.state';

interface ContainerProps {
  bg: string;
  text: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props: ContainerProps) => props.bg};
  color: ${(props: ContainerProps) => props.text};
`;

const StyledApp: FunctionComponent = ({ children }: PropsWithChildren<{}>) => {
  const theme = useSelector(themeSelector);
  const { vw, vh } = useClientDimensions();
  const dispatch = useDispatch();

  dispatch(update({ w: vw, h: vh }));

  return (
    <Container
      bg={theme.body.bg}
      text={theme.elevated.text}
      className="flex flex-col w-screen h-screen"
    >
      {children}
    </Container>
  );
};

export default StyledApp;
