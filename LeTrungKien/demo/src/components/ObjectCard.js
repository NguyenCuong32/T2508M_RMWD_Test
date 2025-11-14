import React from 'react';
import { Card } from 'react-bootstrap';

const ObjectCard = ({ object }) => {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img variant="top" src={object.image} alt={object.name} />
      <Card.Body className="text-center">
        <Card.Title className="text-primary fw-bold">{object.name}</Card.Title>
        <Card.Text className="small">
          {object.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ObjectCard;