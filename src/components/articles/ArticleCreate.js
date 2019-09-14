import React from "react";
import { connect } from "react-redux";
import { createArticle } from "../../actions";
import ArticleForm from "./ArticleForm";

class ArticleCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createArticle(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Article</h3>
        <ArticleForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createArticle }
)(ArticleCreate);
