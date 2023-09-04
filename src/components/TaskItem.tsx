import React, { useEffect, useRef, useState, useReducer } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { itemType } from './model';
import { Actions } from '../actionTypes/taskActions';

interface taskItemProps {
  item: itemType;
  ind: number;
  dispatch: React.Dispatch<Actions>;
}

const TaskItem: React.FC<taskItemProps> = ({ item, ind, dispatch }) => {
  const { id, task, isCompleted } = item;

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [editTask, setEditTask] = useState<string>(task);

  const editRef = useRef<HTMLInputElement>(null);
  //----------------------------------

  const handleTaskCompleted = (id: number | string) => {
    dispatch({ type: 'COMPLETED_TASK', payload: id });
  };
  //--------------------------------

  const handleTaskDeleted = (id: number | string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  //----Local Functions--------------------------
  const editTaskHandler = () => {
    if (!isEdit && !isCompleted) {
      setIsEdit(true);
      setIsEdit(!isEdit);
      editRef.current?.focus();
    }
  };

  const onSubmitEdit = (e: React.FormEvent, id: string | number): void => {
    e.preventDefault();

    dispatch({ type: 'EDIT_TASK', payload: { id, editTask } });

    setIsEdit(false);
    editRef.current?.blur();
  };

  //----------------------------------
  const onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTask((prev) => e.target.value);
  };

  useEffect(() => {
    editRef.current?.focus();
  }, [isEdit]);

  return (
    <>
      <div className='task-container'>
        <form className='form-edit' onSubmit={(e) => onSubmitEdit(e, id)}>
          {isEdit ? (
            <input
              type='input'
              className='edit-input'
              ref={editRef}
              name='editTask'
              value={editTask}
              autoComplete='off'
              onChange={onChangeEdit}
            />
          ) : (
            <span
              className='task-text'
              data-ind={ind}
              style={{
                textDecoration: isCompleted ? 'line-through red' : 'none',
              }}
            >
              {task}
            </span>
          )}
        </form>

        <div className='icons-fn'>
          <div className='edit i' onClick={editTaskHandler}>
            <AiFillEdit size='2rem' />
          </div>

          <div className='delete i' onClick={() => handleTaskDeleted(id)}>
            <AiFillDelete size='2rem' />
          </div>

          <div
            className='isCompleted i'
            onClick={function handleDivClick(e) {
              handleTaskCompleted(id);
            }}
          >
            <MdDone size='2rem' />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default TaskItem;
//falta escribir las funciones en el taskReducer
//verificar el estado state vs. itemsList
