import axios from 'axios';

export const addProjectTask = (projectTask, history) => async (dispatch) => {
    await axios.post('http://localhost:8085/api/board', projectTask);
    history.push('/');
};
