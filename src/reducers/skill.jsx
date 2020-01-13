import {
    CREATE_SKILL,
    CREATE_SKILL_ERROR,
    EDIT_SKILL,
    EDIT_SKILL_ERROR,
    GET_ALL_SKILLS,
    GET_ALL_SKILLS_ERROR
} from "../actions/skill";

export const skillReducer = (state = {}, action) => {
    console.log(action.payload);
    switch (action.type) {
        case GET_ALL_SKILLS:
            return action.payload.skills;
        case GET_ALL_SKILLS_ERROR:
            return state;
        case CREATE_SKILL:
        case CREATE_SKILL_ERROR:
        case EDIT_SKILL:
        case EDIT_SKILL_ERROR:
        default:
            return state;
    }
};