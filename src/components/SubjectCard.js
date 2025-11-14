export default function SubjectCard({item}){
  return(
    <div class="card shadow-sm" style={{width:"22rem"}}>
      <img src={item.image} class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">{item.subject}</h5>
        <p class="card-text">{item.description}</p>
      </div>
    </div>
  );
}