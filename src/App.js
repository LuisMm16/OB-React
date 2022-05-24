import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import CreateTaskFormik from './components/pure/form/createTaskFormik';
// import Solution from './components/ejerciciosOB/Solucion12';
// import Square from './components/pure/Square';
// import ContactList from './components/container/contact_list';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/Dashboard';
import TasksPage from './pages/tasks/TasksPage';
import NotFoundPage from './pages/404/NotFoundPage';
import ChuckJokesPage from './pages/chuck/ChuckJokesPage';

function App() {
  function addTask(task) {
    console.log(task);
    alert(JSON.stringify(task));
  }
  // return (
  //   <div className="App">
  //     {/* <ContactList></ContactList> */}
  //     {/* <Square /> */}
  //     {/* <Solution /> */}
  //     <CreateTaskFormik
  //       add={addTask}
  //     />
  //   </div>
  // );
  let loggedIn = true;

  return (
    <Router>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route
          path=''
          element={
            loggedIn ?
              <Navigate to='/dashboard' />
              :
              <Navigate to='/login' />
          }
        />
        {/* Login Route */}
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        {/* Dashboard Route */}
        <Route
          path='/dashboard'
          element={
            loggedIn ?
              <DashboardPage />
              :
              <Navigate to='/login' />
          }
        />
        {/* Task route */}
        <Route path='tasks' element={
          loggedIn ?
            <TasksPage />
            :
            <Navigate to='/login' />
        } />

        {/* Chuck Norris Jokes */}
        <Route path='/chuck' element={<ChuckJokesPage />} />

        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
