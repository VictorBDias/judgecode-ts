import React from 'react';
import { GrSearch } from 'react-icons/gr';
// import { DebounceInput } from 'react-debounce-input';
import debounce from 'lodash.debounce';
// CUSTOM IMPORTS
import { Container, SearchButton } from './searchBar.styles';
import { SearchBarProps } from './searchBar.interfaces';

/** The default SearchBar for the hole application */
const SearchBar = ({
  className = 'search-bar',
  placeholder = 'Pesquise por nome',
  onChange = () => {},
  defaultValue,
  ...rest
}: SearchBarProps) => {
  //* REFS
  const inputRef = React.useRef(null);

  //* STATES
  const [searchBar, setSearchBar] = React.useState('');

  //* FUNCTIONS

  const onSearchChange = () => {
    if (inputRef.current) {
      const { current } = inputRef;
      const { value } = current;
      onChange(value);
    }
  };

  const debouncedSearch = debounce((func: any) => {
    onSearchChange();
  }, 500);

  return (
    <Container className={className} {...rest}>
      <SearchButton onClick={() => console.log('cliq')}>
        <GrSearch style={{ height: 20, width: 20 }} />
      </SearchButton>

      <input
        className="input"
        ref={inputRef}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={debouncedSearch}
      />
    </Container>
  );
};
export { SearchBar };
