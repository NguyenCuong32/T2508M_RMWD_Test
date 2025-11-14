 import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ObjectList from "./components/ObjectList";
import SubjectList from "./components/SubjectList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Banner />
    <ObjectList />
    <SubjectList />
    <Footer />
    </>
  );
}

export default App;
