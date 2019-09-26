import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticles } from "../../actions";

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  renderAdmin(article) {
    if (article.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/articles/edit/${article.id}`}
            className="ui button primary"
          >
            Edit
          </Link>

          <Link
            to={`/articles/delete/${article.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return (
      <table class="ui selectable celled table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Type</th>
            <th>Publication</th>
            <th>Year</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{this.renderItem()}</tbody>
      </table>
    );
  }

  renderItem() {
    return this.props.articles.map((article) => { //THIS HOW IT IS STRUCTURED
      return (
        <tr key={article.id}>
          <td>{article.article_title}</td>
          <td>{article.article_author}</td>
          <td>{article.article_publication_type}</td>
          <td>{article.article_publication}</td>
          <td>{article.article_year}</td>
          <td>{article.article_location}</td>
          <td>{article.article_status}</td>
        </tr>
      );

      //     <div className="item" key={article.id}>
      //       <i className="large middle aligned icon camera" />
      //       <div className="content">
      //         {article.article_title}
      //         <div className="description">{article.article_author}</div>
      //       </div>
      //       {this.renderAdmin(article)}
      //     </div>
      //   );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/articles/new" className="ui button primary">
            Create article
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Articles</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: Object.values(state.articles),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchArticles }
)(ArticleList);
