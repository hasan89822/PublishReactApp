import { Container, CssBaseline, Typography } from '@material-ui/core';
import './App.css';
import { ProductList } from './pages/ProductList';

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Mobile List
      </Typography>
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
