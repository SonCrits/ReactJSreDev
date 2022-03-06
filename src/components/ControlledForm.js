import React, {Component} from "react";
import { Form} from "react-redux-form";
import {Button, Input} from 'reactstrap';

class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: ''
            }
        }
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            values: {[name] : value}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.values.name)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type='text'
                        name='name'
                        onChange={this.handleInputChange}
                        value={this.state.values.name}
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}

export default ControlledForm;