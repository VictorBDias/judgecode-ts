import React from 'react';

//* CUSTOM IMPORTS
import debounce from 'lodash.debounce';
import { Icon } from '../../atoms/Icon';
import { Container, SearchButton, ClearButton } from './searchBar.styles';
import { SearchBarProps } from './searchBar.interfaces';

/** The default SearchBar for the hole application */
const SearchBar = ({
  className = 'search-bar',
  placeholder,
  onChange,
  defaultValue,
  ...rest
}: SearchBarProps) => {
  //* REFS
  const inputRef = React.useRef(null);

  //* STATES
  const [isFocused, setIsFocused] = React.useState(false);
  const [searchBar, setSearchBar] = React.useState('');

  //* FUNCTIONS
  function onSearchChange() {
    if (inputRef.current) {
      const { current } = inputRef;
      const { value } = current;
      onChange(value);
      setSearchBar(value);
    }
  }

  function clearSearchBar() {
    if (inputRef.current) {
      const { current } = inputRef;
      let { value } = current;
      onChange('');
      value = '' as never;
      setSearchBar('');
    }
  }

  const debouncedSearch = debounce((func: any) => {
    onSearchChange();
  }, 500);

  return (
    <Container
      className={className}
      isFocused={isFocused}
      isFilled={searchBar !== ''}
      {...rest}
    >
      <SearchButton type="button" title="pesquisar">
        <Icon name="search" />
      </SearchButton>

      <input
        ref={inputRef}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={debouncedSearch}
      />

      {searchBar !== '' && (
        <ClearButton
          type="button"
          onClick={() => clearSearchBar}
          title="Limpar"
        >
          <Icon name="close" />
        </ClearButton>
      )}
    </Container>
  );
};
export { SearchBar };
