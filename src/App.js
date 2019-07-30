import React from 'react';
import{ BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
//import uuid from 'uuid';
import Axios from 'axios';

// Built from Travetsty Media React Crash Course https://www.youtube.com/watch?v=sBws8MSXN7A&t=5164s


class App extends React.Component {
 state = {
   todos: [ ]
 }

 // Using Axios to go a Get() request to the JSONPLaceholder dummy data endpoint
 componentDidMount() {
   Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
   .then(res => this.setState({ todos: res.data}))
 }

 // Toggle Complete status
 markComplete = (id) => {
   console.log('markComplete from App.js', id)
   this.setState({todos: this.state.todos.map(todo => {
     if(todo.id === id){
        todo.completed = !todo.completed
     }
     return todo;
   })});
 }

// Delete Todo Item by filtering out any item id is not equal to one we are passing in
// '...' spread operator, used to copy contents
// Items will reapear on reload as we cannot persist the data
// Filter() will return the list again, only where the Id does match that of
// the one passed in (deleted)
// Because we need to use a $ in the URL - A parameter which will tell us which ID to delete
// note the use of back-ticks `` (Alt+9+6)
delTodo = (id) => {
  console.log('delTodo from App.js', id)

  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter (todo => todo.id !== id)] }));

  this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)]
  })
}

// Add ToDo using Axios to post new items (title and completed)
// Following the post, we get a promise back (res), from which we can add the data (res.data) to the collection of todos
addToDo = (title) => {
  console.log(title)
  Axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false 
  })
    .then( res => this.setState({ todos:
    [...this.state.todos, res.data]}));
}

 render() {
   console.log(this.state.todos)
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
            <Route exact path="/" render={props => (
                      <React.Fragment>
                      <AddToDo addToDo={this.addToDo} />
                      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                      </React.Fragment>
            )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
 }
}

export default App;
