import * as ActionTypes from './ActionTypes';


export const Departs = (state = {
    departs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.RENDER_DEPART:
            return {...state, departs: action.payload}
        default:
            return state;
    }
};