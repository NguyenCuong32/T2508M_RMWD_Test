import React from "react";

export default function WhoShouldLearn() {
  return (
    <>
      <h3 className="text-center fw-bold mt-5 mb-4">
        SHOULD WHO LEARN PROGRAMING IN FPT APTECH?
      </h3>

      <div className="container">
        <div className="row g-4 text-center">

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3uMYSD-b8ahWESz7P9egsWLu4aRsCZCMtA&s"
                className="img-fluid rounded"
                alt=""
              />
              <h5 className="text-primary fw-bold mt-3">HIGH SCHOOL STUDENT</h5>
              <p>
                You want to pursue information technology, want to study in a
                professional programming training environment, with a systematic
                program and guaranteed output.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <img
                src="https://toquoc.mediacdn.vn/280518851207290880/2023/3/14/photo-1678796016026-16787960165271074008265.jpg"
                className="img-fluid rounded"
                alt=""
              />
              <h5 className="text-primary fw-bold mt-3">STUDENT</h5>
              <p>
                You want to pursue information technology, want to study in a
                professional programming training environment, with a systematic
                program and guaranteed output.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <img
                src="https://cdn2.tuoitre.vn/thumb_w/480/2022/4/13/photo-1-1649824025116963231.jpg"
                className="img-fluid rounded"
                alt=""
              />
              <h5 className="text-primary fw-bold mt-3">WORKING</h5>
              <p>
                You want to pursue information technology, want to study in a
                professional programming training environment, with a systematic
                program and guaranteed output.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
