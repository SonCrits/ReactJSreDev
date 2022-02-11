import {STAFFS, DEPARTMENTS} from '../shared/staffs';

export const initialState = {
    staffs : STAFFS,
    departs : DEPARTMENTS
};

export const Reducer = (state = initialState,action) => {
    return state;
};