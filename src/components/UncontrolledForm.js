import React, {Component} from "react";

class UncontrolledForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.name.value)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input  
                        type='text'
                        name="name"
                        ref={(input) => (this.name = input)}
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}

export default UncontrolledForm;