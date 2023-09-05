import './App.css';

function App() {
  const name = <h1>Erick</h1>;
  const age = <h2> idade</h2>;
  const email = <h2> email@domain.com</h2>
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );
  return (
    <div className="App">
      {user}
      {user}
      {user}
      
    </div>
  );
}

export default App;
