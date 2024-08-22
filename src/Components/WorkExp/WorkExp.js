import React from "react";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <div className="" style={{borderBottom:'2px solid gray',}}>
      <h1 style={{ marginLeft: "20px", width: "600px" }}>Work Experience: -</h1>
      <div className="work1" style={{ marginTop: "30px" }}>
        <article style={{ fontFamily: "cursive", marginLeft: "10px" }}>
          <h3 style={{ fontFamily: "Roboto" }}>Senior Full Stack Developer</h3>
          <p>Ally Finance (Nov 2023 - Present)</p>
          <ul>
            <li>
              Built Next.js applications with server-side rendering, designing
              reusable components using the React Library.
            </li>
            <li>
              Implemented React Router for Single Page Applications,
              synchronizing data with the server.
            </li>
            <li>
              Design, implement, and manage databases using MongoDB,
              technologies. Ensure efficient data storage and retrieval.
            </li>
            <li>
              Write, maintain, and enhance server-side code using Java, ensuring
              high performance and responsiveness to requests from the
              front-end.
            </li>
            <li>
              Implemented robust cloud architectures, incorporating AWS services
              such as EC2, S3, Lambda, and RDS.
            </li>
          </ul>
        </article>
      </div>
      <div className="Work2" style={{ marginTop: "40px" }}>
        <article style={{ fontFamily: "cursive", marginLeft: "10px" }}>
          <h3>Senior Frontend-Full Stack Developer</h3>
          <p>Fidelity Investments (Sep 2021 - Oct 2023)</p>
          <ul>
            <li>
              Designed and developed the backend architecture using Java and
              Spring Boot for robust and efficient performance.
            </li>
            <li>
              Engaged in web development using HTML5, CSS3, JavaScript, React
              JS, and Ajax.• Ensured application responsiveness using Material
              UI, Prime React UI, and CSS media queries.
            </li>
            <li>
              Created RESTful APIs with Spring Boot to enable communication
              between the client and server.
            </li>
            <li>
              Engineered APIs using Node.js, Express, and MongoDB for efficient
              data retrieval and manipulation.
            </li>
            <li>
              Configured AWS Simple Notification Service (SNS) for email and
              text notifications, enhancing user engagement.
            </li>
          </ul>
        </article>
      </div>
      <div className="Work3" style={{ marginTop: "40px" }}>
        <article style={{ fontFamily: "cursive", marginLeft: "10px" }}>
          <h3>Senior Full Stack Developer</h3>
          <p>Avhana Health (Mar 2019 - Aug 2021)</p>
          <ul>
            <li>
              Ensured efficient project management and collaboration within
              cross-functional teams. Demonstrated hands-on experience with web
              services (REST).
            </li>
            <li>
              Manage databases with JPA and Hibernate for efficient data storage
              and retrieval.• Collaborated with UI/UX designers to create an
              intuitive and responsive user interface, resulting in a 25%
              increase in user engagement.
            </li>
            <li>
              worked in tandem with backend developers to create and execute
              RESTful APIs that provide effective data transfer between
              front-end and back-end systems.For a responsive user experience,
              real-time updates of product details and inventory status were
              made possible with the help of ReactJS and WebSocket.
            </li>
            <li>
              Write, maintain, and enhance server-side code using Java, ensuring
              high performance and responsiveness to requests from the
              front-end.
            </li>
            <li>
              Implemented WebSocket API for bidirectional communication between
              clients and the server, ensuring instant message delivery.
            </li>
          </ul>
        </article>
      </div>
      <div className="Work4" style={{ marginTop: "40px" }}>
        <article style={{ fontFamily: "cursive", marginLeft: "10px" }}>
          <h3>Full Stack Developer</h3>
          <p>Neo growth (Mar 2018- Feb 2019)</p>
          <ul>
            <li>
              Implemented Routing in Single Page Application using Reactjs
              Provided Router module. Created a repository of classes using the
              Repository pattern, Generics and Interfaces.
            </li>
            <li>
              Communicating with the back-end development team in the process of
              fetching the related data through JSON files using RESTful API
              GET/POST methods.
            </li>
            <li>
              Coordinating with the UX Design team to get the workflow of the
              wireframe to implement the application requirements.
            </li>
            <li>
              Worked on JWT authorization token for roles to display certain
              areas of the UI for specific users. Interacted with team members
              effortlessly complete the goals designed for teams.Called backend
              APIs using Axios library to integrate in our application.
              front-end.
            </li>
            <li>
              Used moment, Date picker libraries to display and render the UI
              with custom specifications. Implemented Web-API functions (GET,
              POST) in services by using HTTP-Client and Observables. Deployed
              the application in Azure app service.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default WorkExp;
