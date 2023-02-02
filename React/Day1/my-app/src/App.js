import './App.css';
import ClassBasedComponent from './components/ClassBasedComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
     <h1> My First React App</h1> 
     <ClassBasedComponent />
     <FunctionalComponent/>
    </div>
  );
}

export default App;
