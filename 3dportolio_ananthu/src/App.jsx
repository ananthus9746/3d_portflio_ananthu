import { BrowserRouter } from "react-router-dom";
import {
  About,
  Navbar,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        hello
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-o">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
