import React from 'react';
import Pokemon from './Pokemon'
import data from './data'

class Pokedex extends React.Component {
  render() {
    return(
      <div className = 'pokedex tile is-ancestor is-flex-wrap-wrap'>
        {data.map(poke => (<Pokemon key = {poke.id} poke={poke} />))}
      </div>
    )
  }
}

export default Pokedex;
