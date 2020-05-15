import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import { ShortID } from "../Tools";

const Gallery = ({ articleList }) => {
  return (
    <>
      {articleList.map((article) => (
        <ArticlePreview key={ShortID.generate()} {...article} />
      ))}
    </>
  );
};

export default Gallery;
