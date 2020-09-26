import {
    DELETE_PROJECT_TASK,
    GET_PROJECT_TASK,
    GET_PROJECT_TASKS,
} from '../actions/types';

const initialState = {
    project_tasks: [],
    project_task: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECT_TASKS:
            return {
                ...state,
                project_tasks: action.payload,
            };
        case GET_PROJECT_TASK:
            return {
                ...state,
                project_task: action.payload,
            };
        case DELETE_PROJECT_TASK:
            return {
                ...state,
                project_tasks: state.project_tasks.filter(
                    (pt) => pt.id !== action.payload //payload here == deleted pt_id
                ),
            };

        default:
            return state;
    }
}
