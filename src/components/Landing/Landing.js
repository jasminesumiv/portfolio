import React from "react";

import { BodyWrapper } from "./Landing.styled";
import NavBar from "../NavBar/NavBar";
import ProfileCard from "../ProfileCard/ProfileCard";
import Skill from "../Skill/Skill";
import SocialMedia from "../SocialMedia/SocialMedia";
import WorkExperience from "../WorkExperience/WorkExperience";
import Project from "../Project/Project";

const Landing = (props) => {
  return (
    <>
      <NavBar></NavBar>
      <BodyWrapper>
        <div className="container-fluid d-flex flex-column align-items-center">
          <ProfileCard />
          <Skill />
          <WorkExperience />
          <Project />
          <SocialMedia />
          <h6 className="devloper-name">
            &copy; By Jasmine Sumi Vincent{" "}
          </h6>
        </div>
      </BodyWrapper>
    </>
  );
};

export default Landing;
