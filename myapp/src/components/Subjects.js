import { useEffect, useState } from "react";

function Subjects() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch("/subjects.json")
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, []);

    return (
        <>
            {subjects.map(sub => (
                <div key={sub.id} className="col-md-4">
                    <div className="card card-body text-center mb-3">
                        <img src={sub.image} className="img-fluid img-sub rounded mb-2" alt={sub.name} />
                        <div className="fs-5 fw-bold text-primary mb-1">{sub.name}</div>
                        <div className="text-black fw-bold">{sub.desc}</div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Subjects;