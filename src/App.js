import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ObjectsPage from "./pages/ObjectsPage";
import SubjectsPage from "./pages/SubjectsPage";

export default function App(){
  return(
    <BrowserRouter>
      <Header/>
      <nav class="navbar navbar-expand-lg bg-white shadow-sm px-4">
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold" to="/">Trang chủ</Link>
          <div>
            <Link class="btn btn-outline-primary me-2" to="/objects">Đối tượng</Link>
            <Link class="btn btn-outline-success" to="/subjects">Môn học</Link>
          </div>
        </div>
      </nav>

      <div class="container my-4">
        <Routes>
          <Route path="/" element={<Navigate to="/objects"/>}/>
          <Route path="/objects" element={<ObjectsPage/>}/>
          <Route path="/subjects" element={<SubjectsPage/>}/>
        </Routes>
      </div>

      <Footer/>
    </BrowserRouter>
  );
}