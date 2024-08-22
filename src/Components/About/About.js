import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import "./About.css"

const About = () => {
  return (
    <div className="footer">
    <article className="Content" style={{marginLeft:"35px"}}>
      <h2>Contact Me</h2>
      <ul style={{ fontSize: 15, listStyleType: "none", }}> 
        <li className="Phone">
          <PhoneIcon /> +1(551) 239-3067
        </li>
        <li className="Email">
          <EmailIcon />
          somasekharalapati06@gmail.com
        </li>
        <li className="link" style={{fontStyle:"Black"}}>
          <a href="https://www.linkedin.com/in/somase/">
            <LinkedInIcon />Somasekhar Alapati.
          </a>
        </li>
        <li className="House">
       <HomeIcon/> 353 sip Ave, apt 1,<br/> Jersey City, New Jersey,USA 07306  </li>
      </ul>
      </article>
    </div>
  );
};

export default About;
