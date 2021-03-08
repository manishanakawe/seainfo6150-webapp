  
    
import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";


const ArticleList = (props) => {
    console.log(props);
    const myList = props.list;
    console.log(myList);
    console.log(myList[0].title);
    
    const mappedList = myList.map((listItem) => (
        <ArticleListItem key={listItem.slug} article={listItem}/>
   
    ));
  
    return (
      <>
        <div>
          <ul>
              {mappedList}
              </ul>
        </div>
        
      </>
    );
  };
  
  export default ArticleList;

