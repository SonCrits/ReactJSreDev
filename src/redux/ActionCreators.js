import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const thunk_fetchStaff = () => (dispatch) => {
    return fetch(baseUrl + 'staffs')
        .then(reponse => reponse.json())
        .then(staffs => dispatch(action_renderStaffs(staffs)))
};

export const action_renderStaffs = (staffs) => ({
    type: ActionTypes.RENDER_STAFF,
    payload: staffs
});

// depart
export const thunk_fetchDepart = () => (dispatch) => {
    return fetch(baseUrl + 'departments')
        .then(reponse => reponse.json())
        .then(departs => dispatch(action_renderDeparts(departs)))
};

export const action_renderDeparts = (departs) => ({
    type: ActionTypes.RENDER_DEPART,
    payload: departs
});

// salary
export const thunk_fetchSalary = () => (dispatch) => {
    return fetch(baseUrl + 'staffsSalary')
        .then(reponse => reponse.json())
        .then(salary => dispatch(action_renderSalary(salary)))
};

export const action_renderSalary = (salary) => ({
    type: ActionTypes.RENDER_SALARY,
    payload: salary
});