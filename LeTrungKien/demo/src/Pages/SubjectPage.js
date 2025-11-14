// src/Pages/SubjectPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ObjectCard from '../components/ObjectCard'; 
import subjectsData from '../Data/subjects.json'; // Import dữ liệu subjects

const SubjectPage = () => {
  return (
    <Container className="mb-5">
      <h2 className="text-center my-4 text-primary">Danh Sách Subjects</h2>
      <Row>
        {subjectsData.map((subject) => (
          <Col key={subject.id} sm={12} md={6} lg={4} className="mb-4">
            {/* Truyền dữ liệu subject vào ObjectCard.js */}
            <ObjectCard object={subject} /> 
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubjectPage;