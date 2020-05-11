import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <StyledDiv>
        <Link to="/characters">
          <button>Click me to see Characters!</button>
        </Link>
        {/* <Link to="/search">
          <button>Click me to search!</button>
        </Link> */}
        </StyledDiv>
      </header>
    </section>
  );
}
