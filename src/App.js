import './App.css';
import Routes from './Components/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Simple CRUD Application</h1>
      <BrowserRouter forceRefresh={true}>
          <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
