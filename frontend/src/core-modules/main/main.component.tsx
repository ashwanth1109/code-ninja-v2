import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from '../home/intro.component';
import HomePageView from '../../auto-generated/home';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';
import Article from '../article/article.component';
import Header from '../header/index.module';
import StyledApp from '../../app.styled';

interface ContainerProps {
  text: string;
}

const Container = styled.div<ContainerProps>`
  color: ${(props) => props.text};
`;

const HomePageRoute = () => (
  <>
    <Intro />
    <h2 className="mt-16 text-4xl">Recent Blog Posts</h2>
    {/* TODO: Pre build / deploy, run a prettier clean on the autogenerated file*/}
    <HomePageView />
  </>
);

const Main = () => {
  const theme = useSelector(themeSelector);

  return (
    <Router>
      <Header />
      <Container
        text={theme.elevated.text}
        className="flex-1 max-w-screen-lg w-full mx-auto"
      >
        <Switch>
          <Route path="/articles/:slug">
            <Article />
          </Route>
          <Route path="/">
            <HomePageRoute />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default Main;