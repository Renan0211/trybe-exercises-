import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className = "pokemon tile is-3 is-parent box m-4 is-flex-direction-column is-align-items-center">
        <h6 className = "tile is-child title">{this.props.poke.name}</h6>
        <div className = "tile is-child"><img src={this.props.poke.image} alt={`A ${this.props.poke.name}`}></img></div>
        <p className = "tile is-child">Type: {this.props.poke.type}</p>
        <a href={this.props.poke.moreInfo} target=".blank" className = "tile is-child button is-info is-small">More Info</a>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  moreInfo: PropTypes.string
}

export default Pokemon;