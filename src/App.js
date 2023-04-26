import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header/> 
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
