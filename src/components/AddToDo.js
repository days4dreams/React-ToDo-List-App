import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddToDo extends Component {

    // Example of Component state (rather than App state) seen in Input's onChange event
    // The state of the Input lives only within the component.
    state = {
        title: ''
    }

    // Submit typically indicates to JS to submit to the file, 
    // to prevent this, we use preventDefault
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: '' });
    }

    // OnChange event pass from the fire of Input.
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // Contains Field to hold value of text and onChange event notification
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text" 
                name="title" 
                style={{flex: '10', padding: '5px'}}
                placeholder="Add a To Do..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

//PropTypes
AddToDo.propTypes = {
    addToDo: PropTypes.func.isRequired
}

export default AddToDo
