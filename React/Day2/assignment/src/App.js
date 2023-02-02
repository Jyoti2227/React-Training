import './App.css';
import PropsInFC from './components/PropsInFC';
import StateInFC from './components/StateInFC';
import StateInCC from './components/StateInCC';

const userData = [
  {
    name :'Jyotii',
    age : 25,
    gender : 'Female',
  },
  {
    name :'Vishal',
    age : 26,
    gender : 'Male',
  },
  {
    name :'Sidharth',
    age : 28,
    gender : 'Male',
  },
  {
    name :'Pujja',
    age : 25,
    gender : 'Female',
  },
  {
    name :'Snehal',
    age : 25,
    gender : 'Female',
  },
];

function App() {
  return (
    <div className="App">
      <PropsInFC users={userData}/>
      <StateInFC/>
      <StateInCC/>
    </div>
  );
}

export default App;
