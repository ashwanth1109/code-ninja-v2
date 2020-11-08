import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../auto-generated/article';
import styled from '@emotion/styled';

const ArticleContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 400px;
  padding: 16px;
`;

const Article = () => {
  const { slug }: { slug: string } = useParams();

  return <ArticleContainer>{articles[slug]({})}</ArticleContainer>;
};

export default Article;
