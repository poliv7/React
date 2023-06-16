import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export interface ITodo {
  text: string;
  done: boolean;
  id: string;
}

export const useTodo = () => {
  const [allTodos, setAllTodos] = useState<Array<ITodo>>([]);

  const addTodo = (text: string) => {
    const valid = text.length > 3;
    if (valid)
      setAllTodos([
        ...allTodos,
        {
          text,
          done: false,
          id: uuidv4(),
        },
      ]);

    return valid;
  };

  const markTodo = (id: string) => {
    const foundTodo = allTodos.find((t) => t.id === id);
    if (foundTodo) {
      foundTodo.done = !foundTodo.done;
      setAllTodos([...allTodos]);

      return true;
    } else {
      console.error(`Wrong todo id: ${id}`);

      return false;
    }
  };

  return { todos: allTodos, addTodo, markTodo };
};
