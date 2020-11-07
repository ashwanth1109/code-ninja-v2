import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../auto-generated/article';

const Article = () => {
  const { slug }: { slug: string } = useParams();

  return articles[slug]({});
};

export default Article;
