import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from '@emotion/styled';
import SearchBox from './search-box.component';

const SearchContainer = styled.div`
  width: 64px;
  height: 64px;
  svg {
    width: 40px;
    height: 40px;
    margin-top: 4px;
  }
`;

const SearchInput = styled.input`
  padding: 8px 32px;
  background: transparent;
  border: 0;
  outline: none;
  font-size: 1.6rem;
`;

const SearchMobile = ({
  focused,
  setFocused,
  search,
  header,
  input,
  setInput,
  showSearchBox,
  handleBlur,
  looking,
  searchHits,
}: // FIXME: Dear future me, Fix this (no-any), I'm too tired to fix. Sincerely, present you.
any) => {
  if (focused) {
    return (
      <div
        className="absolute w-full h-full left-0 top-0 z-10 flex items-center"
        style={{ background: header.bg }}
        onBlur={handleBlur}
      >
        <SearchInput
          autoFocus
          placeholder="Search for keywords"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ color: header.text }}
        />
        {showSearchBox && (
          <SearchBox
            handleBlur={handleBlur}
            looking={looking}
            search={search}
            searchHits={searchHits}
          />
        )}
      </div>
    );
  }

  return (
    <SearchContainer
      className="flex items-center justify-center cursor-pointer"
      onClick={() => setFocused(true)}
    >
      <SearchIcon style={{ fill: search.mobile }} height={100} />
    </SearchContainer>
  );
};

export default SearchMobile;
