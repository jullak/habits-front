import * as path from '../constants/path';
import axios from 'axios';

export const GET_ALL_SKILLS = 'GET_ALL_SKILLS';
export const GET_ALL_SKILLS_ERROR = 'GET_ALL_SKILLS_ERROR';
export const EDIT_SKILL = 'EDIT_SKILL';
export const EDIT_SKILL_ERROR = 'EDIT_SKILL_ERROR';
export const CREATE_SKILL = 'CREATE_SKILL';
export const CREATE_SKILL_ERROR = 'CREATE_SKILL_ERROR';
export const GET_SKILL = 'GET_SKILL';
export const GET_SKILL_ERROR = 'GET_SKILL_ERROR';


export const getSkills = (id, done) => {
    return dispatch => {
        const uri = path.mainHost  + path.getSkills;

        axios.get(uri, {params: {userId: id, done: done}}).then(res => {
            console.log(res);
            dispatch(getSkillsSuccess(res.data));
        }).catch(err => {
            dispatch(getSkillsError(err.message));
        });
    };
};
export const getSkillsSuccess = (data) => ({
    type: GET_ALL_SKILLS,
    payload: data
});

export const getSkillsError = (err) => ({
    type: GET_ALL_SKILLS_ERROR,
    payload: err
});

export const getSkillById = (id) => {
    return dispatch => {
        const uri = path.mainHost  + path.getSkills + '/' + id;

        axios({
            method: 'get',
            url: uri
        }).then(res => {
            dispatch(getSkillByIdSuccess(res.data));
        }).catch(err => {
            dispatch(getSkillByIdError(err.message));
        });
    };
};
export const getSkillByIdSuccess = (data) => ({
    type: GET_SKILL,
    payload: data
});

export const getSkillByIdError = (err) => ({
    type: GET_SKILL_ERROR,
    payload: err
});

export const editSkill = ({ id, name='', maxPoint=-1 }) => {
    return dispatch => {
        let param = new URLSearchParams();
        if (name !== '') {
            param.append('name', name)
        }
        if (maxPoint !== -1) {
            param.append('maxPoint', maxPoint)
        }

        const uri = path.mainHost  + path.editSkill + '/' + id;

        axios({
            method: 'post',
            url: uri,
            data: param
        }).then(res => {
            dispatch(res.data);
        }).catch(err => {
            dispatch(err.message);
        });
    };
};
export const editSkillSuccess = (data) => ({
    type: EDIT_SKILL,
    payload: data
});

export const editSkillError = (err) => ({
    type: EDIT_SKILL_ERROR,
    payload: err
});

export const createSkill = ({id, name, maxPoint=-1}) => {
    return dispatch => {
        let param = new URLSearchParams();
        param.append('userId', id);
        param.append('name', name);
        if (maxPoint !== -1) {
            param.append('maxPoint', maxPoint);
        }

        const uri = path.mainHost  + path.createSkill;

        axios({
            method: 'post',
            url: uri,
            data: param
        }).then(res => {
            dispatch(createSkillSuccess(res.data));
        }).catch(err => {
            dispatch(createSkillError(err.message));
        });
    };
};
export const createSkillSuccess = (data) => ({
    type: CREATE_SKILL,
    payload: data
});

export const createSkillError = (err) => ({
    type: CREATE_SKILL_ERROR,
    payload: err
});

