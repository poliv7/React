import { ReactNode } from 'react';
import { Grid } from '@mui/material';

const TodoBoxItem = ({ children }: { children: ReactNode }) => {
  return (
    <Grid item sx={{ p: '.5rem', width: '80%' }}>
      {children}
    </Grid>
  );
};

export default TodoBoxItem;
