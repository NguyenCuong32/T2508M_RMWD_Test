import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const techIcons = [
  { title: "React JS", image: "/anh/anh5.png" },
  { title: "PHP", image: "/anh/anh6.png" },
  { title: "Python", image: "/anh/anh7.png" },
  { title: ".NET Core", image: "/anh/anh8.png" },
  { title: 'Power', image: '/anh/anh9.png' },
];

const CourseProgramSection = () => {
  return (
    <Container className="my-5 py-4 text-center">
      {/* Tiêu đề */}
      <h2 className="mb-5" style={{ fontSize: "2rem", fontWeight: "bold" }}>
        WHAT IS THE COURSE PROGRAM?
      </h2>

      {/* Hàng chứa 5 biểu tượng */}
      <Row className="justify-content-center mb-5">
        {techIcons.map((item, index) => (
          <Col key={index} xs={4} sm={3} md={2} className="p-2">
            <div className="tech-icon-wrapper">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Col>
        ))}
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <p className="px-3" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            With a program design that includes 04 semesters with many important
            technologies such as **ReactJS, PHP, Python, .NET Core, Spring
            boot** brings learners to the world of programming quickly, most
            effectively. After graduation, students are confident in front of
            employers with 4 project semesters with quality, practical products,
            students will definitely score points.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseProgramSection;
