import './App.css';
import ClassBasedComponent from './ClassBasedComponent';
import FunctionalBasedComponent from './FunctionalBasedComponent';
import EmployeeFunctionalComponent from './EmployeeFunctComponent';

const EmployeeList = [
  {
    name:"Jyotii",
    gender:"Female",
    id:1,
  },
  {
    name:"Jyoti",
    gender:"Female",
    id:2,
  },
  {
    name:"Vishal",
    gender:"Male",
    id:3,
  },
  {
    name:"Sid",
    gender:"Male",
    id:4,
  },
  {
    name:"Pujaa",
    gender:"Female",
    id:5,
  },
];
function App() {
  return (
    <div className="App">
     <ClassBasedComponent name="React"/>
     <FunctionalBasedComponent name="React"/>
     <EmployeeFunctionalComponent employeeList = {EmployeeList}/>
    </div>
  );
}

export default App;
