import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';
import SearchIcon from '@material-ui/icons/Search';
import useDebounce from '../../shared-module/hooks/use-debounce.hook';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface ContainerProps {
  bg: string;
  bottomBorder: string;
  focused: boolean;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bg};
  border-radius: 2px;
  top: calc(50% - 18px);
  transition: 0.1s ease-in-out width;
  width: ${(props) => (props.focused ? '100%' : '220px')};
  border-bottom: ${(props) =>
    props.focused ? `2px solid ${props.bottomBorder}` : ``};
`;

const SearchIconContainer = styled.div`
  width: 36px;
  height: 36px;
`;

interface InputProps {
  text: string;
  placeholderColor: string;
}

const Input = styled.input<InputProps>`
  font-size: 1rem;
  line-height: 20px;
  border: none;
  outline: none;
  padding: 8px;
  background-color: transparent;
  color: ${(props) => props.text};

  ::placeholder,
  ::-ms-input-placeholder {
    color: ${(props) => props.placeholderColor};
    opacity: 1;
  }
`;

interface SearchHitProps {
  hoverBg: string;
}

const SearchHit = styled.div<SearchHitProps>`
  :hover {
    background: ${(props) => props.hoverBg};
  }
`;

interface SearchMetadata {
  title: string;
  keywords: string[];
  slug: string;
}

/**
 * TODO:
 * This is hardcoded strategy. The actual implementation is yet to be done.
 * Also, this is not representative of the actual data structure we will end up using
 * Need more efficient lookup strategies, this is too crude and terrible.
 * Will be researching into this topic for the best way of doing this
 */
const searchLookupArr: SearchMetadata[] = [
  {
    title: 'Demystifying JavaScript Closures',
    /**
     * TODO:
     * Look for any AWS service that can generate a list of "interesting" keywords based on content
     * Use this list for refactored strategy from above todo
     */
    keywords: ['demystifying', 'javascript', 'closures', 'theory'],
    slug: 'demystifying-javascript-closures',
  },
  {
    title: 'Introduction to RxJS',
    /**
     * TODO:
     * Look for any AWS service that can generate a list of "interesting" keywords based on content
     * Use this list for refactored strategy from above todo
     */
    keywords: ['introduction', 'rxjs', 'angular', 'theory'],
    slug: 'intro-to-rxjs',
  },
];

const Search = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [searchHits, setSearchHits] = useState<SearchMetadata[]>([]);
  const [looking, setLooking] = useState(true);

  const { header } = useSelector(themeSelector);
  const { search } = header;

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback((e) => {
    if (e.relatedTarget === null) {
      setShowSearchBox(false);
      setInput('');
      setFocused(false);
    }
  }, []);

  const debouncedInput = useDebounce(input, 500);

  const searchForArticles = (searchString: string) => {
    const filteredList = searchLookupArr.filter((item) => {
      return item.keywords.some((keyword) => {
        const searchWordArr = searchString.split(' ');
        return searchWordArr.every((searchWord) =>
          keyword.match(new RegExp(searchWord, 'i')),
        );
      });
    });

    setSearchHits(filteredList);
    setLooking(false);
  };

  useEffect(() => {
    if (!debouncedInput) {
      setShowSearchBox(false);
      return;
    }

    // search
    setLooking(true);
    setShowSearchBox(true);
    searchForArticles(debouncedInput);
  }, [debouncedInput]);

  return (
    <Container
      bg={search.bg}
      bottomBorder={search.bottomBorder}
      focused={focused}
      onBlur={handleBlur}
      className="flex absolute right-0"
    >
      <SearchIconContainer className="px-3 flex items-center justify-center">
        <SearchIcon style={{ fill: search.icon }} />
      </SearchIconContainer>
      <Input
        text={header.text}
        placeholderColor={search.icon}
        className="flex-1"
        onFocus={handleFocus}
        placeholder="Search by keywords"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {showSearchBox && (
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
                  searchHits.map((searchHit) => (
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
      )}
    </Container>
  );
};

export default Search;
