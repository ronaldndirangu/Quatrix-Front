import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from '../types';

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST
});

export const fetchTasksSuccess = ({ tasks, page, totalTasks, perPage }) => ({
  type: FETCH_TASKS_SUCCESS,
  tasks,
  page,
  totalTasks,
  perPage
});

export const fetchTasksFailure = ({ error }) => ({
  type: FETCH_TASKS_FAILURE,
  error
});
