import { ListItem, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import { ITodo } from '../../hooks/use-todo';

export interface TodoArgs extends ITodo {
  markTodo: (id: string) => void;
}

const Todo = ({ done, text, id, markTodo }: TodoArgs) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="sys-check"
          onClick={() => markTodo(id)}
        >
          {done ? (
            <RemoveDoneIcon color="error" />
          ) : (
            <DoneIcon color="success" />
          )}
        </IconButton>
      }
    >
      <ListItemText
        primary={text}
        sx={{ textDecoration: done ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default Todo;
