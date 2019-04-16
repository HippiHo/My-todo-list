import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import Filter from "./Filter";
import TodoList from "./TodoList";
import { getRandomTagline } from "../helpers";
import uuid from "uuid/v4";
import Storage from "../modules/Storage";

class App extends Component {
  constructor(props) {
    super(props);

    this.storageKey = "react-todo";
    const old = Storage.get(this.storageKey);

    if (old) {
      this.state = JSON.parse(old);
    } else {
      this.state = {
        tasks: {}
      };

      Storage.set(this.storageKey, JSON.stringify(this.state));
    }
  }

  componentWillMount() {
    this.setState({
      headline: getRandomTagline()
    });
  }

  componentDidUpdate() {
    Storage.set(this.storageKey, JSON.stringify(this.state));
  }

  addToDo = text => {
    const task = {
      uuid: uuid(),
      text: text,
      done: false
    };

    this.setState(state => {
      state.tasks[task.uuid] = task;
      return state;
    });
  };

  updateText = (uuid, text) => {
    this.setState(state => {
      state.tasks[uuid].text = text;
      return state;
    });
  };

  toggleDone = e => {
    const checkbox = e.target;
    console.log(checkbox.value);
    console.log("checking");

    this.setState(state => {
      state.tasks[checkbox.value].done = checkbox.checked;
      return state;
    });
  };

  removeTask = uuid => {
    console.log("remove", uuid);
    this.setState(state => {
      delete state.tasks[uuid];
      return state;
    });
  };

  setFilter = filter => {
    this.setState(state => {
      state.filter = filter;
      return state;
    });
  };

  render() {
    return (
      <div className="container">
        <Header tagline={this.state.headline} />
        <Form addToDo={this.addToDo} />
        <Filter activeFilter={this.state.filter} setFilter={this.setFilter} />
        <TodoList
          tasks={this.state.tasks}
          filter={this.state.filter}
          updateText={this.updateText}
          toggleDone={this.toggleDone}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
