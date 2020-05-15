import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./Pages/Article";
import Home from "./Pages/Home";

const App = () => {
  console.log("in app");

  const [articleList, setArticleList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/articles")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setArticleList(response);
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred");
      });
  }, []);

  return (
    <>
      <h1>This is the app</h1>
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
