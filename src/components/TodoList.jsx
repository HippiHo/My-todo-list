import React, { Component } from "react";
import Task from "./Task";

class TodoList extends Component {
  filteredTasks = () => {
    const filtered = [];

    for (const uuid in this.props.tasks) {
      const task = this.props.tasks[uuid];

      if (
        this.props.filter === "all" ||
        (this.props.filter === "done" && task.done === true) ||
        (this.props.filter === "undone" && task.done === false)
      ) {
        filtered.push(task);
      }
    }
    return filtered;
  };

  render() {
    return (
      <div className="todo-list">
        <div className="tasks">
          {this.filteredTasks().map(task => (
            <Task
              key={`task-${task.uuid}`}
              data={task}
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
