// src/components/LogoTech.js
import React from 'react';
import { Col } from 'react-bootstrap';

// Định nghĩa lại component LogoTech
const LogoTech = ({ src, name }) => (
    // Col: xs=4 để trên mobile có 3 cột, sm=2 để trên desktop có 6 cột (hoặc 5 nếu bạn có 5 logo)
    // Nếu bạn có 5 logo, dùng Col xs=4, md=2 để căn giữa đẹp hơn
    <Col xs={4} md={2} className="d-flex flex-column align-items-center justify-content-start mb-4">
        <img
            src={src}
            alt={name}
            // Điều chỉnh kích thước logo để chúng trông nhất quán hơn
            style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
            className="mb-2" // Thêm khoảng cách dưới logo
        />
        {/* Tăng cường font weight và color nếu nền tối */}
        <p className="fw-bold text-center" style={{ color: '#fff', fontSize: '1.1rem' }}>{name}</p> 
    </Col>
);

export default LogoTech;