import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Erick" age={32} email="erick@mail.com"/>
      <User name="Jake" age={25} email="jake@mail.com"/>
      <User name="Jessica" age={37} email="jessica@mail.com"/>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1> {props.name}</h1>
      <h1> {props.age}</h1>
      <h1> {props.email}</h1>
    </div>
  );
}

export default App;
