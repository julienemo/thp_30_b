import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MarkdownConverter } from "../Tools";

const Article = () => {
  const { slug } = useParams();
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
    fetch(`http://localhost:1337/articles?slug=${slug}`)
      .then((response) => response.json())
      .then((response) => {
        setArticle(response[0]);
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred");
      });
  }, [slug]);

  const singleTag = (tag) => (<div id={tag.slug} style={{color: tag.color}}>{tag.title}</div>)

  const display = (article) => (
    <>
      {" "}
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      {handleImage(article)}
      <div
        dangerouslySetInnerHTML={{
          __html: article.content
            ? MarkdownConverter.makeHtml(article.content)
            : "",
        }}
      />
      <div className='tag_zone'>{article.tags.map((tag)=>singleTag(tag))}</div>
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
