import { useEffect, useState } from "react";

function Objects() {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        fetch("/objects.json")
            .then(res => res.json())
            .then(data => setObjects(data));
    }, []);

    return (
        <>
            {objects.map(ob => (
                <div key={ob.id} className="objects-item">
                    <div className="text-center mt-3">
                        <img src={ob.image} className="img-fluid w-50 rounded-circle" alt="" />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Objects;