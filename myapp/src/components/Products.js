import Subjects from "./Subjects";

function Products() {
    return (
        <div className="container mt-3">
            <div className="text-center mt-3 mb-3 fs-4 fw-bold">SHOULD WHO LEARN PROGRAMING IN FPT APTECH</div>
            <div className="row mt-2">
                <Subjects />

                <Subjects />
            </div>
        </div>
    );
}

export default Products;