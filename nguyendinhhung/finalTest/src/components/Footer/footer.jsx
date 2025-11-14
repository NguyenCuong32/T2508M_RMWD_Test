import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">

                {/* 1. Phần Thông tin chung */}
                <div className="footer-section contact-info">
                    <h4 className="section-heading">FPT APTECH VIETNAM</h4>
                    <p>Unleash your potential.</p>
                    <p>Học lập trình, học Aptech since 1999. Học tại FPT.</p>
                </div>

                {/* 2. Phần Địa chỉ và Liên hệ */}
                <div className="footer-section location">
                    <h4 className="section-heading">LIÊN HỆ</h4>
                    <p>
                        <i className="fas fa-map-marker-alt"></i>
                        Địa chỉ: No 8 Ton That Thuy - My Dinh, Nam Tu Liem, Ha Noi
                    </p>
                    {/* Thêm thông tin giả định về email/điện thoại */}
                    <p>
                        <i className="fas fa-envelope"></i>
                        Email: contact@fptaptech.edu.vn
                    </p>
                    <p>
                        <i className="fas fa-phone"></i>
                        Hotline: 1900 6006
                    </p>
                </div>

                {/* 3. Phần Liên kết nhanh (Tùy chọn) */}
                <div className="footer-section quick-links">
                    <h4 className="section-heading">QUICK LINKS</h4>
                    <ul className="links-list">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#booking">Booking</a></li>
                        <li><a href="#locations">Locations</a></li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} FPT Aptech. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;