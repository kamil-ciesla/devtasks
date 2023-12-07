import React, { useState } from 'react';

export const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => {
        return (
          <li
            key={task.id}
            style={{ border: '2px solid red', padding: '2rem' }}
          >
            <input type="checkbox" />
            {task.id}. {task.name}
            <button
              onClick={() => {
                props.onRemove(task.id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
