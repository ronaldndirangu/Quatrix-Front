import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTasksAction } from '../../redux/actions/tasks';

const TaskContainer = ({ fetchTasks }) => {
  useEffect(() => {
    fetchTasks({ token: '', page: 1, limit: 5 });
  });
  return (
    <div>
      Task
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchTasks: ({ token, page, limit }) => dispatch(fetchTasksAction({ token, page, limit }))
});

export default connect(null, mapDispatchToProps)(TaskContainer);
