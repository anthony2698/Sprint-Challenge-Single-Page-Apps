import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log("Data", response.data.results);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
`;
  return (
    <StyledDiv className="character-list">
      {data.map((character) => {
        return(
        <CharacterCard key={character.id} character={character}/>
        );
      })}
    </StyledDiv>
  );
}
