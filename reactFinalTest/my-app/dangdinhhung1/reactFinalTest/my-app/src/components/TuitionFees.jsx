import tuition from "../data/tuition";

function TuitionFees() {
  return (
    <div className="container section">
      <h2>Học Phí</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Ngành</th>
            <th>Học phí mỗi học kỳ</th>
          </tr>
        </thead>
        <tbody>
          {tuition.map((t) => (
            <tr key={t.id}>
              <td>{t.major}</td>
              <td>{t.fee} VNĐ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TuitionFees;
