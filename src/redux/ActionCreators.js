import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// staff
    // render
export const thunk_fetchStaff = () => (dispatch) => {
    return fetch(baseUrl + 'staffs')
        .then(reponse => reponse.json())
        .then(staffs => dispatch(action_renderStaffs(staffs)))
};

export const action_renderStaffs = (staffs) => ({
    type: ActionTypes.RENDER_STAFF,
    payload: staffs
});
    // action
    // post
export const thunk_postStaff = (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) => (dispatch) => {
    const newStaff = {
        name: name,
        doB: new Date(doB),
        salaryScale: parseFloat(salaryScale),
        startDate: new Date(startDate),
        departmentId: departmentId,
        annualLeave: annualLeave,
        overTime: parseFloat(overTime)
    };

    return fetch(baseUrl + 'staffs', {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: {'Content-Type': 'application/json'},
        credentials: 'same-origin'
    })
        .then(reponse => reponse.json())
        .then(staffs => dispatch(action_postStaff(staffs)))
}

export const action_postStaff = (staffs) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staffs
})
    // delete
export const thunk_delStaff = (id) => (dispatch) => {
    return fetch(baseUrl + 'staffs/' + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        credentials: 'same-origin'
    })
        .then(reponse => reponse.json())
        .then(staffs => dispatch(action_delStaff(staffs)))
};

export const action_delStaff = (staffs) => ({
    type: ActionTypes.DELETE_STAFF,
    payload: staffs
})

    // patch
export const thunk_patchStaff = (id, name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) => (dispatch) => {
    const updateStaff = {
        id: id,
        name: name,
        doB: new Date(doB),
        salaryScale: parseFloat(salaryScale),
        startDate: new Date(startDate),
        departmentId: departmentId,
        annualLeave: annualLeave,
        overTime: parseFloat(overTime)
    };

    return fetch(baseUrl + 'staffs', {
        method: "PATCH",
        body: JSON.stringify(updateStaff),
        headers: {'Content-Type': 'application/json'},
        credentials: 'same-origin'
    })
        .then(reponse => reponse.json())
        .then(staffs => dispatch(action_patchStaff(staffs)))
}
export const action_patchStaff = (staffs) => ({
    type: ActionTypes.UPDATE_STAFF,
    payload: staffs
})

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