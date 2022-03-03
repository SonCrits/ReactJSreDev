import * as ActionTypes from './ActionTypes';

export const Staffs = (state= {
    staffs: []
} , action) => {
    switch (action.type) {
        case ActionTypes.RENDER_STAFF:
            return {...state, staffs: action.payload}
        default:
            return state;
    }
};