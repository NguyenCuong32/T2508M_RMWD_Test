// src/App.js (Ví dụ)

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // ***IMPORT ROUTER***
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'; 

function App() {
  return (
    // ***BỌC TOÀN BỘ NỘI DUNG VÀO TRONG <Router>***
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;