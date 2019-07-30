import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// Example of Class-Type Component
class Todos extends React.Component {

 render() {
    console.log(this.props.todos)
  return this.props.todos.map((todo) => 
  ( <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/> ));
 }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
