import Pokedex from './Pokedex';
import './bulma.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <section class="hero is-medium is-warning">
        <div class="hero-body">
          <p class="title">POKÉDEX</p>
        </div>
      </section>
      <div className="container is-warning">
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
