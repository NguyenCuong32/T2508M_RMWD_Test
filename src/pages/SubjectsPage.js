import { useEffect, useState } from "react";
import SubjectCard from "../components/SubjectCard";

export default function SubjectsPage(){
  const [subjects,setSubjects]=useState([]);
  useEffect(()=>{ fetch("/subjects.json").then(r=>r.json()).then(setSubjects); },[]);
  return(
    <div>
      <h2 class="mb-3">Các môn học</h2>
      <div class="d-flex flex-wrap gap-3">
        {subjects.map(s=> <SubjectCard key={s.id} item={s}/>)}
      </div>
    </div>
  );
}