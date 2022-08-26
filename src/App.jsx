import { useState } from 'react';
import 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Pokemons 1ª Geração</h1>
      <div class="cards">
        <CardPokemon />
      </div>
    </div>
  );
}

export default App;
