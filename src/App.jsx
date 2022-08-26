import { useState } from 'react';
import CardPokemon from './components/CardPokemon';
import api from './services/api';
import './App.css';

function App() {
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
