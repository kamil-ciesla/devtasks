import React, { useState } from 'react';

export const DynamicList = (props) => {
  const listElements = [...Array(props.n).keys()]
  return (
    <ul>
      {listElements.map((elementNumber) => {
        return (
          <li
            key={elementNumber}
            style={{ border: '2px solid red', padding: '2rem' }}
          >
            List element {elementNumber}{' '}
          </li>
        );
      })}
    </ul>
  );
};
