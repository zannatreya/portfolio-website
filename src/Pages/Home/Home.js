import React from "react";
import About from "./About";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

const Home = () => {
  return (
    <section className="px-4 lg:px-20 my-10">
      <Banner />
      <Projects />
      <About />
      <ContactMe />
    </section>
  );
};

export default Home;
