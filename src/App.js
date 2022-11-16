import './App.css';
import { Route, Routes } from 'react-router-dom';
import Configure from './pages/Configure';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/configure' element={<Configure />} />
    </Routes>
  );
}

export default App;
