
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Records from './Records';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Routes>
        {/* <Route path="/" element={<Search />} />
        */}
       <Route path='/' element={<Records></Records>}/>
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
