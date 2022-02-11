import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomeComponent';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Main />
                </div >
            </BrowserRouter>
        </Provider>
    );
}
  
export default App;