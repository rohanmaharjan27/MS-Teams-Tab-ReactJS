import './App.css';
import * as msTeams from '@microsoft/teams-js';
import { Route, Routes } from 'react-router-dom';
import Configure from './pages/Configure';
import Home from './pages/Home';

function App() {
  msTeams.app.initialize();

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/configure' element={<Configure />} />
    </Routes>
  );
}

export default App;
