import * as ActionTypes from './ActionTypes';

export const Salary = (state= {
    salary: []
} , action) => {
    switch (action.type) {
        case ActionTypes.RENDER_SALARY:
            return {...state, salary: action.payload}
        default:
            return state;
    }
};