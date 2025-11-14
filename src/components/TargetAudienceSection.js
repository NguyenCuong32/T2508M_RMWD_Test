import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import targetAudienceData from '../data/objects.json'; 
const TargetAudienceSection = () => {
  return (
    <Container className="my-5"> 
      <h2 className="text-center mb-5" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        SHOULD WHO LEARN PROGRAMING IN FPT APTECH?
      </h2>
      
      <Row className="justify-content-center">
       
        {targetAudienceData.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card className="text-center shadow-sm h-100 border-0">
              <Card.Img 
                variant="top" 
               src={item.image} 
                alt={item.title} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="pt-2" style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#007bff' }}>
                  {item.title}
                </Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TargetAudienceSection;