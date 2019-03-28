import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    // Without the modern error function one would need to use
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputText = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log(`Create new item: ${this.inputText.current.value}`);
  };

  render() {
    return (
      <form className="input-group my-3" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Add a new task"
          ref={this.inputText}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-danger" type="submit">
            <i className="fas fa-plus" aria-hidden="true" />
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
