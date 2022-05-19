import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos task.scss
import '../../styles/task.scss';
// import TaskForm from '../pure/forms/taskForm';
import CreateTaskFormik from '../pure/forms/createTaskFormik';

const TaskListComponent = () => {

  const defaultTask1 = new Task('Example1', 'Description 1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task Stated has been modified');
    setTimeout(() => {
      setLoading(false);
    }, 2000)
    return () => {
      console.log('TaskList component is going to unmount');
    };
  }, [tasks]);

  function completeTask(task) {
    console.log('Complete this task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // Update the state of the component
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log('Delete this task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log('Add this task:', task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task, index) => (
              <TaskComponent
                task={task}
                key={index}
                complete={completeTask}
                remove={deleteTask}
              />
            ))
          }
        </tbody>

      </table>
    )
  };

  let tasksTable;

  if (tasks.length > 0) {
    tasksTable = <Table />
  } else {
    tasksTable = (
      <div>
        <h3>There are no tasks to show</h3>
        <h4>Please, create one</h4>
      </div>
    )
  }

  const loadingStyle = {
    color: 'grey',
    fontSize: '30px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* Card Header (title) */}
          <div className='card-header p-3'>
            <h5>
              Your Tasks:
            </h5>
          </div>
          {/* Card body (content) */}
          <div
            className='card-body'
            data-mdb-perfect-scrollbar='true'
            style={{
              position: 'relative',
              height: '400px'
            }}>
            {/* TODO: add loading spinner */}
            {loading ? <p style={loadingStyle}>Loading</p> : tasksTable}
          </div>
        </div>
      </div>
      {/* <TaskForm
        add={addTask}
        length={tasks.length}
      /> */}
      <CreateTaskFormik
        add={addTask}
      />
    </div>
  );
};



export default TaskListComponent;
