// App.js
import SecretMessage from './components/SecretMessage';
import NotificationSwitch from './components/NotificationSwitch';
import PostViewer from './components/PostViewer';
import ToggleCounter from './components/ToggleCounter';
import UseForm from './components/UseForm';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div>
      {/* Soal 1 */}
      <SecretMessage />
      <NotificationSwitch />

      {/* Soal 2 */}
      <PostViewer />

      {/* Soal 3 */}
      <ToggleCounter />

      {/* Soal 4 */}
      <UseForm />

      {/* Soal 5 */}
      <ThemeToggle />
    </div>
  );
}

export default App;