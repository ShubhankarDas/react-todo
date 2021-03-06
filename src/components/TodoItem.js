import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      textDecoration: this.props.todo.completed ? 'Line-through' : 'none',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {

    const { title, id } = this.props.todo

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> { ' ' }
          {title}
          <button style={ btnStyle } onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.prototypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

TodoItem.prototypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem
