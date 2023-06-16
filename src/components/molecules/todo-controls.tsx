import { Checkbox, FormControl, FormControlLabel } from '@mui/material';

export interface TodoControlsArgs {
  hideCompleted: boolean;
  toggleHidden: () => void;
}

const TodoControls = ({ hideCompleted, toggleHidden }: TodoControlsArgs) => {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        value="hide_completed"
        control={
          <Checkbox checked={hideCompleted} onChange={() => toggleHidden()} />
        }
        label="Hide Completed"
        labelPlacement="end"
      />
    </FormControl>
  );
};

export default TodoControls;
