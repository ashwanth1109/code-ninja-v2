import React from 'react';
import Intro from '../home/intro.component';
import HomePageView from '../../auto-generated/home';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';

interface ContainerProps {
  text: string;
}

const Container = styled.div<ContainerProps>`
  color: ${(props) => props.text};
`;

const Main = () => {
  const theme = useSelector(themeSelector);

  return (
    <Container
      text={theme.elevated.text}
      className="flex-1 max-w-screen-lg w-full mx-auto"
    >
      <Intro />
      <h2 className="mt-16 text-4xl">Recent Blog Posts</h2>
      <HomePageView />
    </Container>
  );
};

export default Main;
