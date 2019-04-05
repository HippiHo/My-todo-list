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
    const text = this.inputText.current.value.trim();
    this.props.addToDo(text);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form
        className="input-group my-3 task-input"
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Add a new task"
          ref={this.inputText}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-danger" type="submit" title="pin">
            <i className="fas fa-map-pin" aria-hidden="true" />
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
