import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const fetchTasksApi = ({ token, page, limit }) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/tasks/assigned`,
    params: { page, limit },
    headers: { token }
  });
};
