import React, { Component } from "react";

class Task extends Component {
  handleInputKeyUp(e) {
    // Remove focus, when the [Enter] key is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }

  render() {
    const todo = this.props.data;
    return (
      <div className="card task" data-id={todo.uuid}>
        <div className="row">
          <div className="custom-control custom-checkbox col-1">
            <input
              className="custom-control-input pl-3"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={this.props.toggleDone}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              value={todo.text}
              onChange={e => {
                this.props.updateText(todo.uuid, e.target.value);
              }}
              onKeyUp={e => {
                this.handleInputKeyUp(e);
              }}
            />
          </div>
          <div className="col-action col-1">
            <i
              className="icon-remove far fa-trash-alt"
              onClick={e => this.props.removeTask(todo.uuid)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
