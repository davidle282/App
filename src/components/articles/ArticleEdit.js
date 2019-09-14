import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchArticle, editArticle } from "../../actions";
import ArticleForm from "./ArticleForm";

class ArticleEdit extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editArticle(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.article) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a article</h3>
        <ArticleForm
          initialValues={_.pick(
            this.props.article,
            "article_title",
            "article_author"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { article: state.articles[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchArticle, editArticle }
)(ArticleEdit);
