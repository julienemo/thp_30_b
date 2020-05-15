import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MarkdownConverter } from "../Tools";

const Article  = () => {
  const { slug } = useParams();
  console.log(slug);

  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  const handleImage = (article) => {
    if (article.cover_img) {
      return (
        <img
          src={`http://localhost:1337${article.cover_img.formats.small.url}`}
          alt={`cover of ${article.title}`}
        />
      );
    } else {
      return "";
    }
  };

  useEffect(() => {
    console.log("slug changed");
    fetch(`http://localhost:1337/articles?slug=${slug}`)
      .then((response) => response.json())
      .then((response) => {
        console.log("in fetch");
        console.log(JSON.stringify(response));
        setArticle(response[0]);
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurreds");
      });
  }, [slug]);

  const display = (article) => (
    <>
      {" "}
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      {handleImage(article)}
      <div>{article.content}</div>
    </>
  );

  return (
    <div className="article">
      {article && display(article)}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Article;
