import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ObjectCard from '../components/ObjectCard';
import LogoTech from '../components/LogoTech';

// IMPORT DỮ LIỆU TỪ THƯ MỤC DATA
import objectsData from '../Data/objects.json'; 

const HomePage = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // SỬ DỤNG DỮ LIỆU ĐÃ IMPORT
    setObjects(objectsData); 
  }, []);

  return (
    <Container className="mt-4">
      {/* Banner chính */}
      <div className="text-center mb-5">
        <img
          src="/images/anh2.jpeg" 
          alt="Banner FPT Aptech"
          className="img-fluid rounded-3 shadow-xl"
          style={{
            maxWidth: '600px', // Giới hạn chiều rộng tối đa của banner
      width: '100%', 
      height: 'auto',
          }}
        />
      </div>

      {/* Phần Đối tượng học */}
      <h2 className="text-center mb-4 fw-bold">
        SHOULD WHO LEARN PROGRAMING IN FPT APTECH?
      </h2>

      <Row className="g-4 mb-5">
        {objects.map(object => (
          <Col md={4} key={object.id}>
            <ObjectCard object={object} />
          </Col>
        ))}
      </Row>
      <div className="text-center mt-5 pt-4">
                <h2 className="mb-5 fw-bold">WHAT IS THE COURSE PROGRAM?</h2>

                <Row className="justify-content-center align-items-center mb-4">
                    
                    {/* Component Logo Công nghệ */}
                    <LogoTech src="/images/react.png" name="React JS" />
                    <LogoTech src="/images/python.jpeg" name="Python" />
                    <LogoTech src="/images/dotnet.jpeg" name=".NET Core" />

                </Row>

                {/* Phần mô tả */}
                <div className="px-5 mx-lg-5 text-muted" style={{maxWidth: '800px', margin: '0 auto'}}>
                    <p>
                        With a program design that includes 04 semesters with many important technologies such as ReactJS, PHP, Python, .NET Core, Spring boot brings learners to the world of programming quickly, most effectively. After graduation, students are confident in front of employers with 4 project semesters with quality, practical products, students will definitely score points.
                    </p>
                </div>

            </div>
            
    </Container>
   
  );
};

export default HomePage;