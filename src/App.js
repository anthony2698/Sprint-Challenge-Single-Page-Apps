import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CharecterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {

  return (
    <main>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <Header />
        <CharecterList />
      </Route>
      <Route path="/search">
        <SearchForm />
      </Route>
    </main>
  );
}
