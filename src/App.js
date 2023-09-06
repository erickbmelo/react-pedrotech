import './App.css';

function App() {
  return (
    <div className="App">
      <User/>
      <User/>
      <User/>
    </div>
  );
}

const User = () => {
  return (
    <div>
      <h1> Erick</h1>
      <h1> idade</h1>
      <h1> email@domain.com</h1>
    </div>
  );
}

export default App;
