import React from 'react';

export default function Element(prop) {
  return (
    prop.element.map(item => {
      return (
        <ul>
          <li>{item}</li>
        </ul>
      );
    })
  );
}
