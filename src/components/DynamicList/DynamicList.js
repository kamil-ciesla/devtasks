import React, { useState } from 'react';

export const DynamicList = (props) => {
  console.log(props.n);
  return (
    <ul>
      XD
      {[...Array(props.n).keys()].map((elementNumber) => {
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
