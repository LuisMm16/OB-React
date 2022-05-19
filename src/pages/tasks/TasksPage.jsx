import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskListComponent from '../../components/container/task_list'

const TasksPage = () => {
  return (
    <div>
      <TaskListComponent />
    </div>
  );
}

export default TasksPage;
