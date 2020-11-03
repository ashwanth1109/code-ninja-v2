import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';

interface ContainerProps {
  text: string;
}

const Container = styled.div<ContainerProps>`
  margin-top: 32px;
  color: ${(props) => props.text};

  h1,
  p {
    color: ${(props) => props.text};
  }
`;

const Intro = () => {
  const theme = useSelector(themeSelector);
  console.log('Theme', theme);

  return (
    <Container text={theme.elevated.text}>
      <Paper
        className="p-4 standard-transition"
        style={{ backgroundColor: theme.elevated.bg }}
      >
        <h1 className="text-3xl">Hi, I'm Ashwanth</h1>
        <p>
          I'm a fullstack typescript developer. I write serverless applications
          (using AWS) in Angular or React.
        </p>
        <p>
          I enjoy writing infrastructure as code with CloudFormation and
          building automation tools or scripts to optimize my workflow and
          improve peer developer experience.
        </p>
        <p>
          I blog about my experiences (or) brag about my code here. Mostly, the
          latter.
        </p>
      </Paper>
    </Container>
  );
};

export default Intro;
