import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div id="about" className="lg:flex lg:mt-20 mt-10 mb-5 px-5">
      <figure className="lg:w-1/2 px-5 animate__animated animate__fadeInLeft">
        <img src="https://i.ibb.co/GCwf5DD/about-png.jpg" alt="about me" />
      </figure>
      <div className="lg:w-1/2 px-5 animate__animated animate__fadeInRight">
        <h3 className="hover:text-sky-700   text-4xl font-bold text-center">
          About Me
        </h3>
        <p className="whitespace-pre-line text-justify  text-xl leading-relaxed  font-sans ">
          {`
                        Hi! This is Zannatul Binta Bahar. A professional front-end developer and I have some idea about backend. I have experienced with HTML, CSS, Bootstrap, Tailwind CSS, React, React-Hooks, javascript, ES6, Firebase, ExpressJs, MongoDB and etc. I am quick learner and always try out new technologies. 
                        I am friendly to do team work, project management, problem-solving, and of course strategic decision making! I'm a big fan of taking ownership and exploring technical challenges to achieve the best output. 
                        
                        I consider myself as a fully dedicated, dynamic, punctual, efficient, quick responder.
                        
                    `}
        </p>
        <p className="text-xl my-5 text-sky-700 italic font-medium font-sans">
          Want to discuss?{" "}
          <Link className="link" to="/contact">
            Say Hi...
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
