import './App.css';
import React , {Component} from 'react';
import Main from './components/MainComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';

class App extends Component {
 

  render() {
    return(
      <div className='App'>
        <Main />
      </div>
    )
  }
}
export default App;