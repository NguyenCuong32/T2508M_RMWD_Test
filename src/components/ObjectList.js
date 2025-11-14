import "./ObjectList.css";
import data from "../data/ObjectData.json";

export default function ObjectList() {
    return (
        <div className="learn-wrapper container my-5">
            <h3 className="text-center fw-bold mb-4">
                SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?
            </h3>

            <div className="row justify-content-center">
                {data.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="learn-card shadow-sm">
                            <img
                                src={require(`../img/${item.image}`)}
                                className="learn-img"
                                alt={item.title}
                            />

                            <div className="p-3">
                                <h5 className="fw-bold">{item.title}</h5>
                                <p className="learn-desc">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
