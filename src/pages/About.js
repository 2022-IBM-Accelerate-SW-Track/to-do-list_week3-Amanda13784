import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/Amanda.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Amanda Baker</div>
            <div className="brief_description">
              <p> Hi. I am a Deep Canvass trainer at a non-profit social and political justice
                organization called Down Home North Carolina. I am also a full-time 
                Software Engineering Student at Arizona State University, a mother of three beautiful children, 
                and a wife of eleven years. I enjoy science, reading, meeting new people and most outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
