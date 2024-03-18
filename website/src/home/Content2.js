import React from "react";
import "./content2.css";
export default function Content2() {
  return (
    <div className="main_content">
      <div className="courses">
        <h1 className="heading_content2">WHO IS THIS COURSE FOR</h1>
        <p className="detail_content2">
          Our courses are great for everyone, whether you're just starting out
          in trading or already have some experience. Join us to learn and
          enhance your trading abilities across different subjects in a way
          that's easy to understand and follow.
        </p>
      </div>
      <div className="team_members">
        <div className="heading2_content2">MEET THE TEAM</div>

        <div className="container2">
            <div className="card">
                <div className="img1"></div>
                <div className="intro">
                    <p>CEO AND FOUNDER</p>
                    <h1>BINOY BABU</h1>
                </div>
            </div>
            <div className="card">
            <div className="img2"></div>
                <div className="intro">
                    <p>CTO AND SMC TRADER</p>
                    <h1>SREEKANTH K</h1>

                </div>
            </div>
            <div className="card">
            <div className="img3"></div>
                <div className="intro">
                    <p>BLOCKCHAIN EXPERT AND WEB3 DEVELOPER</p>
                    <h1>SANDYAGU R</h1>
                </div>
            </div>
            <div className="card">
              <div className="img4"></div>
                <div className="intro">
                    <p>PUBLICITY DESIGNER AND MEDIA HEAD</p>
                    <h1>ANUGRAH</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
