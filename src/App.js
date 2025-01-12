
import './App.css';
import Search from './Component/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Canva from './Component/Canva';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/canva" element={<Canva></Canva>} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
