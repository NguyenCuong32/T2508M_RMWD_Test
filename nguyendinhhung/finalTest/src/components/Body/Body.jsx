import './Body.css'
import subjectsData from '../../data/subject.json'
function Body() {
    return (
        <>
            <section className="subject-section">

                <h2 className="section-title">WHAT IS THE COURSE PROGRAM?</h2>

                <div className="subjects-grid">
                    {subjectsData.map((item) => (
                        // Sử dụng item.id làm key
                        <div key={item.id} className="subject-card">

                            <div className="subject-image-container">
                                <img src={item.image} alt={item.subject} className="subject-image" />
                            </div>


                            {/* Tiêu đề môn học */}
                            <h3 className="subject-title">{item.subject}</h3>

                            {/* Mô tả */}
                            <p className="subject-description">{item.description}</p>

                        </div>
                    ))}
                </div>

                {/* Phần cam kết sau tốt nghiệp */}
                <div className="graduation-promise">
                    <p>
                        After graduation, students are confident in front of employers with 4 project semesters with quality, practical products, students will definitely score points. [cite: 33]
                    </p>
                </div>
            </section>
        </>
    )

}
export default Body