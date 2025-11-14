import { useEffect, useState } from "react";
import ObjectCard from "../components/ObjectCard";

export default function ObjectsPage(){
  const [objects,setObjects]=useState([]);
  useEffect(()=>{ fetch("/objects.json").then(r=>r.json()).then(setObjects); },[]);
  return(
    <div>
      <h2 class="mb-3">Đối tượng tuyển sinh</h2>
      <div class="d-flex flex-wrap gap-3">
        {objects.map(o=> <ObjectCard key={o.id} item={o}/>)}
      </div>
    </div>
  );
}