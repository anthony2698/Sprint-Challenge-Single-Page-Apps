import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState({ results: [] });
  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('name');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(`https://rickandmortyapi.com/api/character/?${queryType}=${query}`)
      .then(res => {
        setCharacterData(res.data)
        console.log(res);
      })
      .catch(err => console.log(err));
  }, [query, queryType]);

  return (
    <div>
      <SearchForm setQuery={setQuery} setQueryType={setQueryType} />
      <div>
          {characterData.results.map(character => {
              return <CharacterCard key={character.id} character={character} />
            })}
      </div>
    </div>
  );
}
