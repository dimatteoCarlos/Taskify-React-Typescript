// export type FnType = { ADD_TASK: string };
// |DELETE_TASK: string;
// |EDIT_TASK: string;
// |COMPLETED_TASK: string;
// export type FnType = {key:string}

// export const TYPEFName: FnType = { ADD_TASK: 'ADD_TASK' };
// ,
// DELETE_TASK: 'DELETE_TASK',
// EDIT_TASK: 'EDIT_TASK',
// COMPLETED_TASK: 'COMPLETED_TASK',

export type Actions =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'COMPLETED_TASK'; payload: number | string }
  | { type: 'DELETE_TASK'; payload: number | string }
  | { type: 'EDIT_TASK'; payload:{id: number | string, editTask:string} };
