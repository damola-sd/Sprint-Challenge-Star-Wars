import React from 'react';
import Element from './StarWarsElement';

export default function StarWarsCharacter(prop) {
  return (
    prop.characters.map(char => {
      return (
        <div 
          key={char.created}
          className='character'
        >  
          <div
            className='bio-data'
          >
            <h4>Name: {char.name}</h4>
            <h4>Birth-Year: {char.birth_year}</h4>
            <h4>Gender: {char.gender}</h4>
            <h4>Eye-Color: {char.eye_color}</h4>
          </div>
          

        <div
          className = 'element'>
          Films
          <Element 
            key={char.created}
            element={char.films}
            />
        </div>

        </div>
                
                
      );
    })
  );
}
