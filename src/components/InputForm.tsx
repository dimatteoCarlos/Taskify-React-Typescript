import React, { useRef } from 'react';

import './styles.css';

interface inputFormProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  taskListHandler: () => void;
}

const InputForm: React.FC<inputFormProps> = ({
  task,
  setTask,
  taskListHandler,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      taskListHandler();
      setTask('');
    }
    inputRef.current?.blur();
    // inputRef.current?.focus();
  };

  return (
    // <div className='form-container'>

    <form className='form-inside' onSubmit={onSubmitHandler}>
      <input
        ref={inputRef}
        type='input'
        className='form-input'
        name='task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        autoComplete='off'
        placeholder='please, enter a task'
      />

      <button className='btn-submit' type='submit'>
        Go
      </button>
    </form>
    // </div>
  );
};

export default InputForm;
