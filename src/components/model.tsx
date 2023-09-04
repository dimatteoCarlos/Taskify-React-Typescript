//two ways of declaring type

export type itemType = {
  id: number | string;
  task: string;
  isCompleted: boolean;
};

export interface typeofItem {
  id: number | string;
  task: string;
  isCompleted: boolean;
}
