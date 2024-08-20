import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import SBHR from './MainPages/SBHR';
import MainRoute from './MainPages/MainRoute';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<SBHR/>} />
          <Route path="/hyderabad/*" element={<MainRoute route="hyderabad" />} />
          <Route path="/guntur/*" element={<MainRoute route="guntur" />} />
          <Route path="/bangalore/*" element={<MainRoute route="bangalore" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
