import React from "react";
import { Router } from "@reach/router";

import Header from "./components/elements/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

import { GlobalStyle } from "./components/styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>

      <GlobalStyle />
    </>
  );
};

export default App;
