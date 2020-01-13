import {
    CREATE_GOAL,
    CREATE_GOAL_ERROR,
    EDIT_GOAL,
    EDIT_GOAL_ERROR,
    GET_ALL_GOALS,
    GET_ALL_GOALS_ERROR
} from "../actions/goal";

export const goalReducer = (state = {}, action) => {
    console.log(action.payload);
    switch (action.type) {
        case GET_ALL_GOALS:
            return action.payload.goals;
        case GET_ALL_GOALS_ERROR:
            return state;
        case CREATE_GOAL:
        case CREATE_GOAL_ERROR:
        case EDIT_GOAL:
        case EDIT_GOAL_ERROR:
        default:
            return state;
    }
}