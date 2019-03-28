import React, { Component } from "react";
import Task from "./Task";

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <div className="tasks">
          {Object.keys(this.props.tasks).map(uuid => (
            <Task
              key={`task-${uuid}`}
              data={this.props.tasks[uuid]}
              updateText={this.props.updateText}
              toggleDone={this.props.toggleDone}
              removeTask={this.props.removeTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
