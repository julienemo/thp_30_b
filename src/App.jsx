import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./Pages/Article";
import Home from "./Pages/Home";
import { dateDesc } from './Tools';

const App = () => {
  const [articleList, setArticleList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/articles")
      .then((response) => response.json())
      .then((response) => {
        dateDesc(response);
        setArticleList(response);
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred");
      });
  }, []);

  return (
    <>
      <h1>Own blog with own API</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home articleList={articleList} error={error}/>
          </Route>
          <Route path="/:slug">
            <Article />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
