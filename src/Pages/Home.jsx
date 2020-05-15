import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../Components/Gallery";

const Article = ({articleList,error}) => {
    return (
    <div className="home">
      {articleList && <Gallery articleList={articleList} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Article;
