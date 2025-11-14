// src/Pages/ObjectPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ObjectCard from '../components/ObjectCard'; // Sử dụng component đã có
import objectsData from '../Data/objects.json'; // Import dữ liệu

const ObjectPage = () => {
  return (
    <Container className="mb-5">
      <h2 className="text-center my-4 text-primary">Danh Sách Objects</h2>
      <Row>
        {objectsData.map((object) => (
          <Col key={object.id} sm={12} md={6} lg={4} className="mb-4">
            {/* object là props được truyền vào ObjectCard */}
            <ObjectCard object={object} /> 
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ObjectPage;