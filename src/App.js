import React from "react";
import {
  Header,
  About,
  Footer,
  Skills,
  Testimonial,
  Work,
  Navbar,
} from "./container";
import "./App.scss";

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
