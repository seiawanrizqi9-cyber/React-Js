import Counter from './components/Counter';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
      <Counter />
      <UserList />
    </div>
  );
}

export default App;