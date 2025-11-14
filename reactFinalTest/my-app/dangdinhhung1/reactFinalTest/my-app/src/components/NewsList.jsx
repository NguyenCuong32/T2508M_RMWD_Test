import news from "../data/news";

function NewsList() {
  return (
    <div className="container section">
      <h2>Tin tức</h2>
      {news.map((n) => (
        <div key={n.id}>
          <h3>{n.title}</h3>
          <p>{n.date}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
