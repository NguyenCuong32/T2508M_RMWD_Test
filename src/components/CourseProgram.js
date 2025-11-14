import courseData from "../data/Product1.json";

export default function CourseProgram() {
  return (
    <div className="container text-center my-5">
      <h3 className="fw-bold mb-4">WHAT IS THE COURSE PROGRAM?</h3>

      {/* List images */}
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {courseData.map((item) => (
          <img 
            key={item.id}
            src={item.image}
            height="80"
            alt={item.subject}
          />
        ))}
      </div>

      {/* Description */}
      <p className="mt-4 px-5"><b><i>
        With a program design that includes 04 semesters with many important
technologies such as ReactJS, PHP, Python, .NET Core, 
Spring boot brings learners to the world of programming quickly, most effectively.</i></b></p>
<p><b><i>After graduation, students are confident in
front of employers with 4 project semesters with quality, practical products, students will
definitely score points in the interview process.
     </i></b> </p>
    </div>
  );
}
