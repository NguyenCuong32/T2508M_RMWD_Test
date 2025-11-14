import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Product';
import Booking from './pages/Booking/Booking';
import Locations from './pages/Location/Location';
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/Login/SignUp';
import NotFound from './pages/NotFound/NotFound';

function MainLayout() {
  return (
    <div className="App">
      <Header />
      <main className="body-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="booking" element={<Booking />} />
        <Route path="locations" element={<Locations />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;