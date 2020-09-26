import axios from 'axios';
import {
    DELETE_PROJECT_TASK,
    GET_ERRORS,
    GET_PROJECT_TASKS,
    GET_PROJECT_TASK,
} from './types';

export const addProjectTask = (projectTask, history) => async (dispatch) => {
    try {
        await axios.post('http://localhost:8085/api/board', projectTask);
        history.push('/');
        dispatch({
            type: GET_ERRORS,
            payload: {},
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data,
        });
    }
};

export const getBacklog = () => async (dispatch) => {
    const res = await axios.get('http://localhost:8085/api/board/all');
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data,
    });
};

export const deleteProjectTask = (pt_id) => async (dispatch) => {
    if (
        window.confirm(
            `Are you sure you want to delete the project task with ID:${pt_id} ? this can't be undone.`
        )
    ) {
        await axios.delete(`http://localhost:8085/api/board/${pt_id}`);
        dispatch({
            type: DELETE_PROJECT_TASK,
            payload: pt_id,
        });
    }
};

export const getProjectTask = (pt_id, history) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:8085/api/board/${pt_id}`);
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data,
        });
    } catch (error) {
        history.push('/');
    }
};
