import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';
import SearchIcon from '@material-ui/icons/Search';

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

const Search = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const { header } = useSelector(themeSelector);
  const { search } = header;

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <Container
      bg={search.bg}
      bottomBorder={search.bottomBorder}
      focused={focused}
      className="flex absolute right-0"
    >
      <SearchIconContainer className="px-3 flex items-center justify-center">
        <SearchIcon
          style={{
            fill: search.icon,
            // transition: '0.1s ease-in-out fill'
          }}
        />
      </SearchIconContainer>
      <Input
        text={header.text}
        placeholderColor={search.icon}
        className="flex-1"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search"
      />
    </Container>
  );
};

export default Search;
