import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({ taskList }) => {

  const { id } = useParams();
  const task = taskList[id-1];

  return (
    <div>
      <h1>Task Detail - {id}</h1>
      <h2>{task.name}</h2>
      <h3>{task.description}</h3>
    </div>
  );
}

export default TaskDetailPage;
