import { DELETE_PROJECT_TASK, GET_PROJECT_TAKS } from '../actions/types';

const initialState = {
    project_tasks: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECT_TAKS:
            return {
                ...state,
                project_tasks: action.payload,
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
