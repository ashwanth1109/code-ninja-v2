import React from 'react';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import type { SearchMetadata } from './use-search.hook';

interface SearchHitProps {
  hoverBg: string;
}

const SearchHit = styled.div<SearchHitProps>`
  :hover {
    background: ${(props) => props.hoverBg};
  }
`;

// FIXME: Dear future me, Fix this (no-any), I'm too tired to fix. Sincerely, present you.
const SearchBox = ({ looking, searchHits, handleBlur, search }: any) => {
  return (
    <div
      className="absolute w-full"
      style={{ top: 'calc(100% + 5px)', maxHeight: '200px' }}
    >
      <Paper square>
        {looking ? (
          <div className="p-4">Looking for search results . . .</div>
        ) : (
          <>
            {searchHits?.length === 0 ? (
              <div className="p-4">No results found . . .</div>
            ) : (
              searchHits.map((searchHit: SearchMetadata) => (
                <Link
                  key={searchHit.slug}
                  to={`/articles/${searchHit.slug}`}
                  onClick={(e) => handleBlur({ ...e, relatedTarget: null })}
                >
                  <SearchHit
                    className="p-4 cursor-pointer hover:underline"
                    hoverBg={search.itemBg}
                  >
                    {searchHit.title}
                  </SearchHit>
                </Link>
              ))
            )}
          </>
        )}
      </Paper>
    </div>
  );
};

export default SearchBox;
