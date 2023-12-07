import React from 'react';

import { TitleText } from '../components/TitleText/TitleText';
import { AppHeader } from '../components/AppHeader/AppHeader';
import { CheckContent } from '../components/CheckContent/CheckContent';
import { Counter } from '../components/Counter/Counter';
import { DynamicList } from '../components/DynamicList/DynamicList';
import { TaskList } from '../components/TaskList/TaskList';

import { useState } from 'react';

const IndexPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task A' },
    { id: 2, name: 'Task B' },
    { id: 3, name: 'Task C' },
  ]);

  function handleRemoveTask(taskId) {
    let taskToRemoveIndex = null;
    for (const i in tasks) {
      if (tasks[i].id == taskId) {
        taskToRemoveIndex = i;
        break;
      }
    }
    let tasksCopy = [...tasks];
    tasksCopy.splice(taskToRemoveIndex, 1);
    setTasks(tasksCopy);
  }

  return (
    <>
      <TitleText />
      <AppHeader />
      <CheckContent />
      <Counter />
      <DynamicList n={3} />
      <TaskList tasks={tasks} onRemove={handleRemoveTask} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
