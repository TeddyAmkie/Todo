import React, { Component } from 'react';

// Input values are set by the state.
// Input fields will have an onChange that will use handleChange
    // handleChange will update the state based on the field
// handleSubmit will use addTodo from its props to update the state of TodoList with the new todo.
class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit(evt) {
        evt.preventDefault();
    }

    handleChange(evt) {
        this.setState()
    }


    render() {
        return (
            <div>
                <Form>
                </Form>
            </div>
        )
    }
}


export default TodoForm;