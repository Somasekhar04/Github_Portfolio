import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import "./Skills.css"

const Skills = () => {
  return (
    <div className="Skills" style={{ marginTop: 40, fontFamily: "Times New Roman" }}>
      <header style={{ fontSize: "40px", padding: 20,}}>Skill Set:- </header>
      <div className="Skilll">
        <ul style={{ fontSize: 30, listStyleType: "none", }}>
          <li>
            <CodeIcon />
            Programming Languages:
            <p style={{ fontSize: 20, fontFamily: "Times New Roman"}}>Java,PL/SQL, SQL.</p>
          </li>
          <li>
            <CodeIcon />
            Frontend Technologies:
            <p style={{ fontSize: 20, fontFamily: "Times New Roman"}}>
              HTML5, XML, DOM, JSON, CSS3, JavaScript, ES6, AJAX, React.JS.
            </p>
          </li>
          <li>
            <StorageIcon />
            DataBase:
            <p style={{ fontSize: 20, fontFamily: "Times New Roman" }}>
              Oracle, SQL Server, MySQL, DynamoDB, MongoDB, MSSQL, Apache Kafka.
            </p>
          </li>
          <li>
            Framework:
            <p style={{ fontSize: 20, fontFamily: "Times New Roman"  }}>
              Spring, Spring Boot, Hibernate, NEXT.JS, Node.js,Angular.JS.
            </p>
          </li>
        </ul>
        </div>
        <div className="Skillr">
        <ul style={{ fontSize: 30, listStyleType: "none", width: 600 }}>
          <li>
            <CodeIcon />
            API:
            <p style={{ fontSize: 20, fontFamily: "Times New Roman" }}>
              Apache tomcat,Restful API,WEB API.
            </p>
          </li>
          <li>
            <CodeIcon />
            Tools And Uitilities:
            <p style={{ fontSize: 20, fontFamily: "Times New Roman" }}>
              Git hub,Eclipse, VS Code,Atoms,JIRA.
            </p>
          </li>
          <li>
            <StorageIcon />
            Cloud Technologies:
            <p style={{ fontSize: 20, fontFamily: "Times New Roman" }}>AWS, AZURE, Oracle.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
