import React from "react";
import { Router, Route } from "react-router-dom";
import ArticleCreate from "./articles/ArticleCreate";
import ArticleEdit from "./articles/ArticleEdit";
import ArticleDelete from "./articles/ArticleDelete";
import ArticleShow from "./articles/ArticleShow";
import ArticleList from "./articles/ArticleList";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={ArticleList} />
          <Route path="/articles/new" exact component={ArticleCreate} />
          <Route path="/articles/edit/:id" exact component={ArticleEdit} />
          <Route path="/articles/delete/:id" exact component={ArticleDelete} />
          <Route path="/articles/show" exact component={ArticleShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
