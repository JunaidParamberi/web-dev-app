import React from 'react';
import "./Projects Card.css";
import arrowSlopIcon from "../Images/Group 5.svg"

function ProjectsCard(props) {

    
    const data = props.cards

    

  return (
    <>
    <div className="project-cards">
      <div className="text">
      <h1>{data.title}</h1>

      <div className="sub">

      <p>{data.subText}</p>
      <img src={arrowSlopIcon} alt="" className="arrow-shape" />   
      </div>

      </div>
      <div className="cover-overlay"></div>
      <img src={data.coverImage} alt="" className="cover-image" />
      
    </div>

    </>
  );
}

export default ProjectsCard;
