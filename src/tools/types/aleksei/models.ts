export interface ITodo {
  id?: number;
  name: string;
  description: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  id?: number;
  constructor(public name: string, public description: string, public isDone = false) {}
}
