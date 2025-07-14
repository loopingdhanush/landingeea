import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TestimonialScroller from "./components/testimonial";
import ResultsShowcase from "./components/result";
import Footer from "./components/footer";
import Course from "./components/course";
import About from "./components/about";
import Instagram from "./components/instagram";
import Final from "./components/final";
import Why from "./components/why";

function App() {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ResultsShowcase />
      <TestimonialScroller />
      <Course />
      <Why/>
      <Instagram />
      <Final/>
      <Footer/>
    </div>
  );
}

export default App;
