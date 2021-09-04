import React from 'react';

const PokemonThumbnail = ({id, name, image, type}) => {
  const style = `thumb-container ${type}`;

  const Capitalize = str => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  return(
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img className="image-pokemon" src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{Capitalize(name)}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  );
}

export default PokemonThumbnail;