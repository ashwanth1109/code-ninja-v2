import React from 'react';
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

  h1 {
    margin-bottom: 32px;
  }
`;

const Intro = () => {
  const theme = useSelector(themeSelector);

  return (
    <Container text={theme.elevated.text}>
      <h1 className="text-3xl">Hi, I'm Ashwanth</h1>
      <p>
        I'm a fullstack TypeScript developer. I write serverless applications
        (using AWS) in Angular (at work) or React (for hobby projects). I enjoy
        writing infrastructure as code with CloudFormation and building
        automation tools to optimize my workflow.
      </p>
      <p>
        I blog about my experiences (or) brag about my code here. Mostly, the
        latter.
      </p>
    </Container>
  );
};

export default Intro;
