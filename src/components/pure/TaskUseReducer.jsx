import React, { useContext } from 'react';
import { DELETE_TASK, myContext, SHOW_ALL, SHOW_COMPLETED, SHOW_PENDING, TOGGLE_TASK } from '../container/TaskListUseReducer';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Task = ({ task }) => {
  const state = useContext(myContext);
  const dispatch = state.dispatch;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 3fr 1fr 1fr',
      color: task.completed ? 'green' : 'tomato',
      textDecoration: task.completed ? 'line-through' : 'none'
    }}>
      <div>
        {task.id}
      </div>
      <div>
        {task.name}
      </div>
      <div>
        {
          task.completed
            ?
            <CheckBoxIcon onClick={() => dispatch({ type: TOGGLE_TASK, payload: { id: task.id } })} />
            :
            <CheckBoxOutlineBlankIcon onClick={() => dispatch({ type: TOGGLE_TASK, payload: { id: task.id } })} />
        }
      </div>
      <div>
        <DeleteIcon onClick={() => dispatch({ type: DELETE_TASK, payload: { id: task.id } })} />
      </div>

    </div>
  )
}

const TaskUseReducer = ({ task }) => {

  const state = useContext(myContext);
  const filter = state.state.filter;

  switch (filter) {
    case SHOW_ALL:
      return (
        <Task task={task} />
      )

    case SHOW_COMPLETED:
      if (task.completed) {
        return (
          <Task task={task} />
        )
      } else {
        return null;
      }

    case SHOW_PENDING:
      if (!task.completed) {
        return (
          <Task task={task} />
        )
      } else {
        return null;
      }

    default:
      return null;
  }
}

export default TaskUseReducer;
