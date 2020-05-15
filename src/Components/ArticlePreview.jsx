import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ArticlePreview = ({...article}) => {
  return (<div className="preview">
    <h3><Link to={`/${article.slug}`}>{article.title}</Link></h3>
    <p>{article.date}</p>
    <p>{article.description}</p>
  </div>)
}

export default ArticlePreview;