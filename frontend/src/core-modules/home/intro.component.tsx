import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 32px;
`;

const Intro = () => (
  <Container>
    <Paper className="p-4">
      <h1 className="text-3xl">Hi, I'm Ashwanth</h1>
      <p>
        I'm a fullstack typescript developer building serverless applications in
        Angular or React.
      </p>
      <p>
        I enjoy working on deploy pipelines with CloudFormation and building
        automation tools or scripts to optimize my workflow and improve peer developer experience.
      </p>
      <p>I blog about my experiences (or) brag about my code here.</p>
    </Paper>
  </Container>
);

export default Intro;
