import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhoShouldLearn from "./components/WhoShouldLearn";
import CourseProgram from "./components/CourseProgram";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }}></div>

      <Banner />
      <WhoShouldLearn />
      <CourseProgram />
      <Footer />
    </>
  );
}

export default App;
