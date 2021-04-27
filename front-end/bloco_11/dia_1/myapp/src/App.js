import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksArr = ['lavar o carro', 'passar as roupas', 'comprar o presente da gabi', 'fazer os ex da trybe']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
        {tasksArr.map(tarefa => task(tarefa))}
      </ul>
      </header>
     
    </div>
  );
}

export default App;
