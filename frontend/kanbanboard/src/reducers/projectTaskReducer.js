import { GET_PROJECT_TAKS } from '../actions/types';

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

        default:
            return state;
    }
}
