import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import ArticleList from "./ArticleList/ArticleList.jsx";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let responseJson;
      // put data fetching code here!
        const response = await fetch(
          "http://demo1390455.mockable.io/articles"
          );
    
          responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route
          exact
          path={`/articlelist/:slug`}
          render={({ match }) => {

            // getting the parameters from the url and passing
            // down to the component as props
            console.log("this slug", match.params.slug);
            //console.log("this slug", Object.values(fetchedData).map);
           //<DynamicArticle article={Object.values(fetchedData)[0]} />
            return <DynamicArticle article={(fetchedData[match.params.slug]
              )}/>;
          }}
        />
        <Route path="/articlelist">
        
        <ArticleList list={Object.values(fetchedData)} />
      
        
        </Route>

        <Route >
        
        <DynamicArticle article={Object.values(fetchedData)[1]} />
        
      
        
        </Route>
      </Switch>
    </div>
  );
}

export default App;