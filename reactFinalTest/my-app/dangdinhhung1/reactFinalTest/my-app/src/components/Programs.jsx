import programs from "../data/programs";

function Programs() {
  return (
    <div className="container section">
      <h2>Ngành Đào Tạo</h2>
      <div>
        {programs.map((p) => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
