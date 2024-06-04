
import './App.css';
import Person from './components/Person';
import Sayac from './components/classComp';
import Paper from './components/functionComp';
import UserCard from './components/userCard';
import RefTest from './components/refTest'
import FilterUser from './components/FilterUser';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Sayac />
      <Paper />
      <Person />
      <UserCard />
      <RefTest />
      <FilterUser />

    </div>
  );
}

export default App;
