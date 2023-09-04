import React from 'react';
import { typeofItem } from './model';

import TaskItem from './TaskItem';
import { Actions } from '../actionTypes/taskActions';

export interface taskListProps {
  itemsList: typeofItem[];
  dispatch: React.Dispatch<Actions>;
}

function TaskList({ itemsList, dispatch }: taskListProps): JSX.Element {
  return (
    <>
      {itemsList.map((item, indx) => {
        const { id, task, isCompleted } = item;
        return <TaskItem item={item} ind={indx} key={id} dispatch={dispatch} />;
      })}
    </>
  );
}

export default TaskList;
