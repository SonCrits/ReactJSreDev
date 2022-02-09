import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomeComponent';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Main />
            </div >
        </BrowserRouter>
    );
}
  
export default App;