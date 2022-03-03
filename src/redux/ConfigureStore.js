import {applyMiddleware, combineReducers, createStore} from 'redux';
import { Staffs } from './staffs';
import { Departs } from './departs';
import { Salary } from './salary';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departs: Departs,
            salary: Salary
        }),applyMiddleware(thunk, logger)
    );
    
    return store;
};