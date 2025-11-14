// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage'; // Giả sử bạn đã tạo HomePage
import ObjectPage from './Pages/ObjectPage';
import SubjectPage from './Pages/SubjectPage';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100"> 
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/objects" element={<ObjectPage />} />
            <Route path="/subjects" element={<SubjectPage />} />
            {/* Có thể thêm Route 404 nếu cần */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;