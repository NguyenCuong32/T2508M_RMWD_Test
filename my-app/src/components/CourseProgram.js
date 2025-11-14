import React from "react";

export default function CourseProgram() {
  const icons = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
  ];

  return (
    <>
      <h3 className="text-center fw-bold mt-5 mb-4">
        WHAT IS THE COURSE PROGRAM?
      </h3>

      <div className="container text-center mb-5">
        {icons.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            width="90"
            height="90"
            className="mx-4"
          />

        ))}
        <div>With a 4-semester curriculum, learners are introduced to essential technologies such as ReactJS, PHP, Python, .NET Core, and Spring. The program is designed to help students quickly build a strong programming foundation and practical skills. By the end of the course, learners will be fully confident applying for jobs with real project experience developed throughout the program.<br /></div>
      </div>
    </>
  );
}
