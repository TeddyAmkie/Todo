import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

// TodoList has a function addTodo that updates the state and inputs a new element into the todos array.
    // addTodo has this. bound in TodoList
// TodoForm has addTodo passed in as a prop
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    render() {
        let todos = this.state.todos.map(todo => <li> <Todo todoData={todo} /> </li>)

        return (
            <div>
                <TodoForm />
                <ul>
                    {todos}
                </ul>
            </div>

        )
    }
}

export default TodoList;