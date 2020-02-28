import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard"; 

export default function SearchForm() {

const [data, setData] = useState([]);
const [query, setQuery] = useState("");

useEffect(() => {
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((response) => {
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(characters);
    });
}, [query]);

const handleInputChange = event => {
  setQuery(event.target.value);
};

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
align-content: center;
`; 
  return (
    <section className="search-form">
      <form className="search">
        <input
          className="input"
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <StyledDiv className="character-list">
      {data.map((character) => {
        return(
        <CharacterCard key={character.id} character={character}/>
        );
      })}
    </StyledDiv>
    </section>
  );
}
