import TodoBox from './components/organisms/todo-box';
import { Box } from '@mui/material';
import FooterAuthor from './components/atoms/footer-author';

function App() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '10% 10%',
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <h1>Todo APP</h1>

      <TodoBox />
      <FooterAuthor/>
    </Box>
  );
}

export default App;
