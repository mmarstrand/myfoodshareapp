import React from "react";
import styled from "styled-components";
import Fuse from "fuse.js";
import Card from "../components/Card";

const StyledSearch = styled.input`
  height: 30px;
  width: 200px;
`;

const StyledSearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #163a5f;
  border-radius: 20px;
  margin: 35px;
`;

function SearchBar({ inputData }) {
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

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
    setSearchResult(result);
  }, [searchInput]);

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
      {searchResult.map(item => (
        <Card
          id={item._id}
          name={item.name}
          title={item.title}
          description={item.description}
          location={item.location}
          time={item.time}
          image={item.image}
          taken={item.taken}
        />
      ))}
    </>
  );
}

export default SearchBar;
