import React from "react";
import styled from "styled-components";
import Fuse from "fuse.js";

const StyledSearch = styled.input`
  height: 30px;
  width: 200px;
  align-items: center;
  justify-content: center;
  outline: none;
  ::placeholder {
    font-size: 12px;
    color: grey;
  }
`;

const StyledSearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #163a5f;
  border-radius: 20px;
  margin: 35px;
`;

function SearchBar({ inputData, searchOutput }) {
  const [searchInput, setSearchInput] = React.useState("");

  function handleChange(event) {
    const value = event.target.value;
    setSearchInput(value);
  }

  const options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name", "title", "description", "location", "time"]
  };
  const fuse = new Fuse(inputData || [], options);

  React.useEffect(() => {
    const result = fuse.search(searchInput);
    result.length > 0 ? searchOutput(result) : searchOutput(inputData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, inputData]);

  return (
    <>
      <StyledSearchBox>
        <i className="fas fa-search" />
        <StyledSearch
          type="text"
          placeholder="Search for food items, location etc."
          onChange={handleChange}
        />
      </StyledSearchBox>
    </>
  );
}

export default SearchBar;
