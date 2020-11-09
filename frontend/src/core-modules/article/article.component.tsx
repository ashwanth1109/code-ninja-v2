import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../auto-generated/article';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { clientSelector, DEVICE } from '@state/client.state';

const ArticleContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 400px;
  padding: 16px;
`;

const Article = () => {
  const { slug }: { slug: string } = useParams();
  const client = useSelector(clientSelector);

  const props =
    client.device !== DEVICE.DESKTOP
      ? {
          videoW: client.w - 48,
          videoH: 560 * ((client.w - 48) / 1000),
        }
      : {};

  return <ArticleContainer>{articles[slug](props)}</ArticleContainer>;
};

export default Article;
