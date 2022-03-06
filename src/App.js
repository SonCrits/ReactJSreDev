import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
import Review from './components/reviewComponent';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';


class App extends Component {

  render(){
    return (
      <div className="App">
        <ControlledForm />
      </div>
    );
  }
  
}

export default App;
