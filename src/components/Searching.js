import React from "react";

class Searching extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       article: article,
  //       term: ""
  //     };
  //     this.searchHandler = this.searchHandler.bind(this);
  //   }

  // searchHandler(event) {
  //   this.setState({ term: event.target.value });
  // }

  render() {
    return (
      // <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Article search</label>
          <input type="text" placeholder="Enter the keword" />
        </div>
      </form>
      // </div>
    );
  }
}
export default Searching;
