import React, { useState, useReducer } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import { typeofItem } from './components/model';
import TaskList from './components/TaskList';

import { TaskReducer } from './reducers/TaskReducer';

export const itemsListInit: typeofItem[] = [
  { id: '', task: '', isCompleted: false },
];

const TaskifyApp: React.FC = () => {
  const [task, setTask] = useState<string>('');

  const [itemsList, dispatch] = useReducer(TaskReducer, []);

  //dispatch function of taskReducer
  const addTask = () => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };
  //---------------------------------------------
  return (
    <>
      <div className='heading'>taskify</div>

      <InputForm task={task} setTask={setTask} taskListHandler={addTask} />

      <TaskList itemsList={itemsList} dispatch={dispatch} />
    </>
  );
};

export default TaskifyApp;
