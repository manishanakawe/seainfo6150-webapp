  import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const ArticleListItem = (props) => {
  return (
      <li key={props.article.slug}>
    <article>
      <header>
        <h1>{props.article.title}</h1>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
        
        <HTMLText text={props.article.shortText} />
      </header>
     </article>
     </li>
  );    
};

export default ArticleListItem;

