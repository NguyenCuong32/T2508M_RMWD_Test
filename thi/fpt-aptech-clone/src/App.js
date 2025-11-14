import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ObjectList from './components/ObjectList';
import SubjectList from './components/SubjectList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroBanner />
        <ObjectList />
        <SubjectList />
      </main>
      <Footer />
    </div>
  );
}

export default App;