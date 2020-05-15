import Showdown from "showdown";

export const ShortID = require('shortid');
export const MarkdownConverter = new Showdown.Converter();

export const dateDesc = (articles) => {
  articles.sort(function (a, b) {
  return (a.date > b.date)? -1:1
});
 }