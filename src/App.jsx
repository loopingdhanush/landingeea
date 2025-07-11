import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TestimonialScroller from "./components/testimonial";
import ResultsShowcase from "./components/result";

function App() {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-white min-h-screen">
      <Navbar />
      <Hero />
      <ResultsShowcase />
      <TestimonialScroller />
    </div>
  );
}

export default App;
