import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList';
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route path="/search">
        <SearchForm />
      </Route>
      </div>
  );
}
