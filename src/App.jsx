import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./landing_components/Navbar";
import Landing from "./landing";
import Resources from "./resources";


function App() {
  return (
    <Router>
      <div className="dark:bg-black bg-gradient-to-br from-orange-200 to-white min-h-screen w-full">
        <Navbar />
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/Resources" element={<Resources/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}


export default App;
