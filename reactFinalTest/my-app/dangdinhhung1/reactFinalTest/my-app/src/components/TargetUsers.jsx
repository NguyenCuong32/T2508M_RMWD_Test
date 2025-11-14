// src/components/TargetUsers.jsx
import "./TargetUsers.css";
import n1 from "../assets/n1.jpg";
import n2 from "../assets/n2.webp";
import n3 from "../assets/n3.jpg";

function TargetUsers() {
  return (
    <section className="target-container">
      <h2 className="target-title">Ai nên học lập trình tại FPT?</h2>

      <div className="target-grid">
        <div className="target-card">
          <img src={n1} alt="Học sinh" />
          <h3>Học sinh THPT</h3>
          <p>Bạn muốn theo đuổi ngành CNTT và học trong môi trường hiện đại.</p>
        </div>

        <div className="target-card">
          <img src={n2} alt="Sinh viên" />
          <h3>Sinh viên</h3>
          <p>Bạn muốn nâng cấp kỹ năng và theo học lập trình bài bản.</p>
        </div>

        <div className="target-card">
          <img src={n3} alt="Người đi làm" />
          <h3>Người đi làm</h3>
          <p>Bạn muốn chuyển ngành sang CNTT hoặc tăng thu nhập.</p>
        </div>
        
      </div>
    </section>
  );
}

export default TargetUsers;
