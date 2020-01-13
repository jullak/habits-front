import * as path from '../constants/path';
import axios from 'axios';

export const GET_ALL_GOALS = 'GET_ALL_GOALS';
export const GET_ALL_GOALS_ERROR = 'GET_ALL_GOALS_ERROR';
export const EDIT_GOAL = 'EDIT_GOAL';
export const EDIT_GOAL_ERROR = 'EDIT_GOAL_ERROR';
export const CREATE_GOAL = 'CREATE_GOAL';
export const CREATE_GOAL_ERROR = 'CREATE_GOAL_ERROR';
export const GET_GOAL = 'GET_GOAL';
export const GET_GOAL_ERROR = 'GET_GOAL_ERROR';

export const GET_DAILY = 'GET_DAILY';
export const GET_DAILY_ERROR = 'GET_DAILY_ERROR';

export const EDIT_TODAY = 'EDIT_TODAY';
export const EDIT_TODAY_ERROR = 'EDIT_TODAY_ERROR';
export const DONE_GOAL = 'DONE_GOAL';
export const DONE_GOAL_ERROR = 'DONE_GOAL_ERROR';


export const getGoals = (id, done) => {
    return dispatch => {
        let param = new URLSearchParams();
        param.append('skillId', id);

        const uri = path.mainHost  + path.getGoals;

        axios.get(uri, {params: {userId: id, done: done}}).then(res => {
            dispatch(getGoalsSuccess(res.data));
        }).catch(err => {
            dispatch(getGoalsError(err.message));
        });
    };
};
export const getGoalsSuccess = (data) => ({
    type: GET_ALL_GOALS,
    payload: data
});

export const getGoalsError = (err) => ({
    type: GET_ALL_GOALS_ERROR,
    payload: err
});


export const getGoalById = (id) => {
    return dispatch => {
        const uri = path.mainHost  + path.getGoals + '/' + id;

        axios({
            method: 'get',
            url: uri
        }).then(res => {
            dispatch(getGoalByIdSuccess(res.data));
        }).catch(err => {
            dispatch(getGoalByIdError(err.message));
        });
    };
};
export const getGoalByIdSuccess = (data) => ({
    type: GET_GOAL,
    payload: data
});

export const getGoalByIdError = (err) => ({
    type: GET_GOAL_ERROR,
    payload: err
});

export const editGoal = ({ id, name='', givenPoint=-1 }) => {
    return dispatch => {
        let param = new URLSearchParams();
        if (name !== '') {
            param.append('name', name)
        }
        if (givenPoint !== -1) {
            param.append('givenPoint', givenPoint)
        }

        const uri = path.mainHost  + path.editSkill + '/' + id;

        axios({
            method: 'post',
            url: uri,
            data: param
        }).then(res => {
            dispatch(editGoalSuccess(res.data));
        }).catch(err => {
            dispatch(editGoalError(err.message));
        });
    };
};
export const editGoalSuccess = (data) => ({
    type: EDIT_GOAL,
    payload: data
});

export const editGoalError = (err) => ({
    type: EDIT_GOAL_ERROR,
    payload: err
});

export const createGoal = ({id, name, givenPoint=-1}) => {
    return dispatch => {
        let param = new URLSearchParams();
        param.append('skillId', id);
        param.append('name', name);
        if (givenPoint !== -1) {
            param.append('givenPoint', givenPoint)
        }

        const uri = path.mainHost  + path.createGoal;

        axios({
            method: 'get',
            url: uri,
            data: param
        }).then(res => {
            dispatch(createGoalSuccess(res.data));
        }).catch(err => {
            dispatch(createGoalError(err.message));
        });
    };
};
export const createGoalSuccess = (data) => ({
    type: CREATE_GOAL,
    payload: data
});

export const createGoalError = (err) => ({
    type: CREATE_GOAL_ERROR,
    payload: err
});

export const editToday = (id) => {
    return dispatch => {
        let param = new URLSearchParams();
        param.append('goalId', id);

        const uri = path.mainHost  + path.editGoal + '/today';

        axios({
            method: 'post',
            url: uri,
            data: param
        }).then(res => {
            dispatch(editTodaySuccess(res.data));
        }).catch(err => {
            dispatch(editTodayError(err.message));
        });
    };
};
export const editTodaySuccess = (data) => ({
    type: EDIT_TODAY,
    payload: data
});

export const editTodayError = (err) => ({
    type: EDIT_TODAY_ERROR,
    payload: err
});

export const editDone = (id) => {
    return dispatch => {
        let param = new URLSearchParams();
        param.append('goalId', id);

        const uri = path.mainHost  + path.editGoal + '/done';

        axios({
            method: 'post',
            url: uri,
            data: param
        }).then(res => {
            dispatch(editTodaySuccess(res.data));
        }).catch(err => {
            dispatch(editTodayError(err.message));
        });
    };
};
export const editDoneSuccess = (data) => ({
    type: DONE_GOAL,
    payload: data
});

export const editDoneError = (err) => ({
    type: DONE_GOAL_ERROR,
    payload: err
});

