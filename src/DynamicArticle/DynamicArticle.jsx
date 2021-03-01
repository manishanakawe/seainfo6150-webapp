import { add } from "lodash";
import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>

      {/* add extra html with javascript attributes here */}
      <header>
        <h1>You can take a pie on plane</h1>
        <address>
          <i>by Cathryn Lindsey(
            <a href="mailto:cathryn.lindsey@nytimes.com">cathryn.lindsey@nytimes.com</a>)</i>
<br />
</address>
<time dateTime="2018-11-21">November 21st 2018, 2:57 pm</time>
      </header>
      
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
