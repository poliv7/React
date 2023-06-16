import { List } from '@mui/material';
import Todo from '../atoms/todo';
import { ITodo } from '../../hooks/use-todo';

export interface TodoListArgs {
  todos: Array<ITodo>;
  markTodo: (id: string) => void;
  hideCompleted: boolean;
}

const TodoList = ({todos, markTodo, hideCompleted}: TodoListArgs) => {
  const activeTodos = hideCompleted
    ? todos.filter((t) => !t.done)
    : todos;

  return activeTodos?.length > 0 ? (
    <List>
      {activeTodos.map((todo) => (
        <Todo {...todo} key={`todo-${todo.id}`} markTodo={markTodo} />
      ))}
    </List>
  ) : (
    <h2>Nothing to do...</h2>
  );
};

export default TodoList;
