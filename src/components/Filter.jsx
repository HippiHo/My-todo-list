import React, { Component } from "react";

class Filter extends Component {
  filters = ["all", "undone", "done"];
  render() {
    return (
      <div className="todo-filters text-center mb-3">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Set a filter to show items"
        >
          {this.filters.map(filter => (
            <button
              type="button"
              className={`btn btn-light ${
                this.props.activeFilter === filter ? "active" : ""
              }`}
              onClick={e => {
                this.props.setFilter(filter);
              }}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;
