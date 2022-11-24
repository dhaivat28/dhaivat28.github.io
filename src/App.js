import React from "react";
import "./App.css";
import {
  Header,
  About,
  Footer,
  Skills,
  Testimonial,
  Work,
  Navbar,
} from "./container";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
