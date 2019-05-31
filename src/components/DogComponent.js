import React from 'react';

export default function Dog(prop) {
  return (
    prop.dogs.map(dog => {
      return (
        <ul>
          <li>{dog}</li>
        </ul>
      );
    })
  );
}
