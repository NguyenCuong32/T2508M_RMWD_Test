import React from "react";
import Header from "../components/Header";
import TargetAudienceSection from "../components/TargetAudienceSection";
import CourseProgramSection from "../components/CourseProgramSection";
const Home = () => {
  return (
    <div>
      <Header />

      {/* Banner chính */}
      <div className="main-banner">
        <img
          src="/anh/anh1.png"
          alt="Banner FPT Aptech"
          style={{ width: "100%" }}
        />
      </div>

      <TargetAudienceSection />
      <CourseProgramSection />
    </div>
  );
};

export default Home;
