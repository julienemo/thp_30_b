import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import { ShortID } from "../Tools";

const Gallery = ({ articleList }) => {
  console.log("in Gallery");
  console.log({ articleList });

  return (
    <>
      <h1>This is the Gallery</h1>
      {articleList.map((article) => (
        <ArticlePreview key={ShortID.generate()} {...article} />
      ))}
    </>
  );
};

export default Gallery;
