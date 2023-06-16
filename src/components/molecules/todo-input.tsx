import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { FormEvent, useState } from 'react';

export interface TodoInputArgs {
  addTodo: (text: string) => boolean;
}

const TodoInput = ({addTodo}: TodoInputArgs) => {
  const [currentText, setCurrentText] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();

    const added = addTodo(currentText);
    if (added) setCurrentText('');
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What to do..."
        autoFocus={true}
        value={currentText}
        error={currentText?.length <= 3}
        color={currentText?.length <= 3 ? 'error' : 'success'}
        onChange={(e) => setCurrentText(e.target.value)}
        inputProps={{ 'aria-label': 'what to do' }}
      />
      <IconButton
        color="primary"
        sx={{ p: '10px' }}
        aria-label="ok"
        onClick={handleSubmit}
      >
        <AddBoxIcon />
      </IconButton>
    </Paper>
  );
};

export default TodoInput;
