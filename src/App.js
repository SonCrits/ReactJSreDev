import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
import Review from './components/reviewComponent';


class App extends Component {

  render(){
    return (
      <div className="App">
        <Review />
      </div>
    );
  }
  
}

export default App;
