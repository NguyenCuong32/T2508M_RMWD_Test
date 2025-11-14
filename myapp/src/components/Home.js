import Objects from "./Objects";
import Subjects from "./Subjects";

function Home() {
    

    return (
        <div className="container mt-3">
            <img src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/12/Banner-trang-con-Sinh-vien-FPT-Aptech-1400x468px-desktop.png" className="w-100 rounded" alt="" />
            <div className="text-center mt-3 mb-3 fs-4 fw-bold">SHOULD WHO LEARN PROGRAMING IN FPT APTECH</div>
            <div className="row mt-2">
                <Subjects />
            </div>

            <div className="p-3">
                <div className="text-center mt-5 mb-2 fs-4 fw-bold">WHAT IS THE COURSE PROGRAM?</div>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <Objects />
                </div>
                <div className="mt-5">With a program design that includes 04 semesters with many important technologies such as ReactJS, PHP, Python, .NET<br />
                    Core, Spring boot brings learners to the world of programming quickly, most effectively. After graduation, students are confident in front of employers with 4 project semesters with quality, practical products, students will definitely score points.</div>
            </div>
        </div>
    );
}

export default Home;