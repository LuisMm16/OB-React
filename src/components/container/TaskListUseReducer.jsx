import React, { useReducer } from 'react';
import TaskUseReducer from '../pure/TaskUseReducer';

// Create Context
export const myContext = React.createContext(null);

// Counter for ID
let nextTaskId = 0;

// Actions
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_PENDING = 'SHOW_PENDING';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';

// Initial State
const initialState = {
  tasks: [],
  filter: 'SHOW_ALL'
};

// Reducer
const taskReducer = (state, action) => {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.payload.filter
      }

    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat({
          id: nextTaskId++,
          name: action.payload.name,
          completed: false
        })
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      }


    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              completed: !task.completed
            }
          } else {
            return task;
          }
        })
      }

    default:
      return state;
  }
}

// Component
const TaskListUseReducer = () => {

  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <myContext.Provider value={
      {
        state,
        dispatch
      }
    }>
      <h1>Task controlled by Context + useReducer</h1>
      {/* Render tasks */}
      {
        state.tasks.length > 0
          ?
          state.tasks.map((task) => (
            <TaskUseReducer task={task} key={task.id} />
          ))
          :
          <p>You don't have tasks</p>
      }

      {/* Add Tasks Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: ADD_TASK, payload: {
              name: e.target.name.value
            }
          })
        }}
      >
        <input id='name' type='text' name='name' />
        <button type='submit'>
          Add Task
        </button>
      </form>

      {/* Buttons */}
      <div>
        <button onClick={() => dispatch({ type: SET_VISIBILITY_FILTER, payload: { filter: SHOW_ALL } })}>
          Show All
        </button>
        <button onClick={() => dispatch({ type: SET_VISIBILITY_FILTER, payload: { filter: SHOW_COMPLETED } })}>
          Show Completed
        </button>
        <button onClick={() => dispatch({ type: SET_VISIBILITY_FILTER, payload: { filter: SHOW_PENDING } })}>
          Show Pending
        </button>
      </div>

    </myContext.Provider>
  );
}

export default TaskListUseReducer;
