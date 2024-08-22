import React from "react";
import "./Education.css";


const Education = () => {
  return (
    <div className="Edu " style={{ marginTop:"60px",  borderBottom:'2px solid gray',}} >
      <h1>Education: -</h1>
      <div className="Masters" style={{marginTop:"0px"}}>
        <h3>Masters in Information Technology</h3>
        <p>Wlmington University, New Castle, Delaware</p>
      </div>
      <div className="b.tech" style={{ marginLeft:"137px"}}>
        <h3>Bachelor's in Electronics and Communication Engineering</h3>
        <p>Sasi Institute of Technology and Engineering</p>
      </div>
    </div>
  );
};

export default Education;
