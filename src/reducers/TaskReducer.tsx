import React from 'react';
import { itemType } from '../components/model';
import { Actions } from '../actionTypes/taskActions';

export const TaskReducer = (itemsList: itemType[], action: Actions) => {
  switch (action.type) {
    case 'ADD_TASK': {
      //ADD A TASK TO itemsList
      console.log('fn:', 'ADD_TASK');
      const tasksList = [
        ...itemsList,
        { id: crypto.randomUUID(), task: action.payload, isCompleted: false },
      ];

      return tasksList;
    }
    //--------------------------
    case 'DELETE_TASK': {
      console.log(`fn: DELETE_TASK id:${action.payload}`);

      return itemsList.filter((el) => el.id !== action.payload);
    }
    //------------------------
    case 'EDIT_TASK': {
      console.log(`fn: EDIT_TASK id:${action.payload.id}`);
      const editedTaskInTheList = itemsList.map((item) =>
        item.id === action.payload.id
          ? { ...item, task: action.payload.editTask }
          : item
      );

      return editedTaskInTheList;
    }
    //------------------------

    case 'COMPLETED_TASK': {
      console.log('fn:', 'COMPLETED_TASK');

      return itemsList.map((el) =>
        el.id === action.payload ? { ...el, isCompleted: !el.isCompleted } : el
      );
    }

    default:
      return itemsList;
  }
};

export default TaskReducer;
