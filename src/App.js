import './App.css';
import CreateTaskFormik from './components/pure/form/createTaskFormik';
// import Solution from './components/ejerciciosOB/Solucion12';
// import Square from './components/pure/Square';
// import ContactList from './components/container/contact_list';

function App() {
  function addTask(task) {
    console.log(task);
    alert(JSON.stringify(task));
  }
  return (
    <div className="App">
      {/* <ContactList></ContactList> */}
      {/* <Square /> */}
      {/* <Solution /> */}
      <CreateTaskFormik
        add={addTask}
      />
    </div>
  );
}

export default App;
