import TodoControls from '../molecules/todo-controls';
import TodoBoxItem from '../atoms/todo-box-item';
import TodoInput from '../molecules/todo-input';
import TodoList from '../molecules/todo-list';
import { Grid, Divider } from '@mui/material';
import { useTodo } from '../../hooks/use-todo';
import { useState } from 'react';

const TodoBox = () => {
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);
  const { todos, addTodo, markTodo } = useTodo();
  const toggleHidden = () => setHideCompleted(!hideCompleted);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-around"
      spacing={2}
      sx={{ border: '1px solid black', width: '50%' }}
    >
      <TodoBoxItem>
        <TodoControls
          hideCompleted={hideCompleted}
          toggleHidden={toggleHidden}
        />
      </TodoBoxItem>

      <Divider variant="fullWidth" sx={{ width: '80%' }} />

      <TodoBoxItem>
        <TodoList
          todos={todos}
          markTodo={markTodo}
          hideCompleted={hideCompleted}
        />
      </TodoBoxItem>

      <Divider variant="fullWidth" sx={{ width: '80%' }} />

      <TodoBoxItem>
        <TodoInput addTodo={addTodo}/>
      </TodoBoxItem>
    </Grid>
  );
};

export default TodoBox;
