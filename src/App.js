import logo from './logo.svg';
import './App.css';
import EditBtn from './components/EditBtn';
import Personal from './components/Personal';

function App() {
  return (
    <div className="App">
      <h1>CV</h1>
      <h2>Personal Info</h2>
      <Personal />
    </div>
  );
}

export default App;
