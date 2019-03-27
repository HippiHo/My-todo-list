import React from "react";
import Header from "./Header";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "Page not found!";
  }

  render() {
    return (
      <div className="container">
        <Header tagline="Error 404" />
        <div className="alert alert-warning">
          <strong>
            Oh no!
            <br />
          </strong>
          The requested page could not be found.
        </div>
      </div>
    );
  }
}

export default NotFound;
