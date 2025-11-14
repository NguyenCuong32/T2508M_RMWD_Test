import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">FPT UNIVERSITY</div>
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/tuyen-sinh">Tuyển sinh</Link>
        <Link to="/lien-he">Liên hệ</Link>
      </nav>
    </header>
  );
}

export default Header;
