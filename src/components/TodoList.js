import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        {items.map(item => (
          <Item
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
        <button
          type="button"
          onClick={clearList}
          className="btn btn-danger btn-block mt-5 text-uppercase"
        >
          clear list
        </button>
      </ul>
    );
  }
}
