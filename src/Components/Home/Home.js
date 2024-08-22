import React from "react";
import Pic from "../Help/Images/pic1.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="card">
     <div className="cardr">
        <img src={Pic} alt="Display phot" />
      </div>
      <div className="cardl">
        <div className="cardl1">
          <h1 style={{ fontFamily: "monospace" }}>Somasekhar A</h1>
          <p className="p1" style={{ fontSize: "1em", fontWeight: 200 }}>
            Senior Full Stack Developer.
          </p>
        </div>
        <p style={{ marginTop: 40 }}>
          I am Somasekhar Alapati, a Full Stack Developer with 6+ years of
          experience in various levels of software development. I am proficient
          in using Java, core Java technologies, and server-side programming
          with the Spring Framework, including Spring Boot for microservices,
          Spring IOC, Spring MVC, Spring Security, and Hibernate. Additionally,
          I have a strong background in front-end technologies such as HTML5,
          CSS3, JavaScript, Angular.js, React.js, Redux, and Ajax, as well as
          experience in network applications using Node.js and I am well-versed
          with CI/CD pipelines, DevOps practices, and effective collaboration
          within multidisciplinary teams. My ability to design and implement
          strong, scalable applications has been recognized through positive
          feedback from users and stakeholders
        </p>
      </div>
     
      <br></br>
    </div>
  );
};

export default Home;
