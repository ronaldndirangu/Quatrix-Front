import { fetchTasksRequest, fetchTasksSuccess, fetchTasksFailure } from '../actionCreators';
import { fetchTasksApi } from '../../services/tasksService';

export const fetchTasksAction = ({ token, page, limit }) => dispatch => {
  dispatch(fetchTasksRequest());
  fetchTasksApi({ token, page, limit })
    .then(res => {
      const { tasks, totalTasks, page, perPage } = res.data;
      dispatch(fetchTasksSuccess({ tasks, page, totalTasks, perPage }));
    })
    .catch(error => dispatch(fetchTasksFailure({ error })));
};
