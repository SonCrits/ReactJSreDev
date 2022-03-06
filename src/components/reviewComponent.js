import React, {Component} from "react";


class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test : 1
        }
        this.tangdan = this.tangdan.bind(this);
    
    }

    tangdan(test) {
        this.setState({
            test: this.state.test + 1
        })
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(reponse => reponse.json())
            .then(user => this.setState({test: user.title}))
    }
    
    render() {
        console.log(this.state.test)
        return(
            <div>
                <button onClick={() => this.tangdan()}>
                    submit
                </button>
                <h2 style={{
                    color: "white"
                }}>{this.state.test}</h2>
                
            </div>
        )
    }
}

export default Review;