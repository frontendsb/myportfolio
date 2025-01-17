import React from "react";
import './Home.css';
import my_photo from "../../images/my_photo.jpg";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <section id="home-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12" style={{Padding: "0"}}>
              <div className="my_photo">
                <div className="photo_box">
                  <img className="img-fluid" src={my_photo} alt="photo" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12" style={{Padding: "0"}}>
              <div className="my_about">
                <div className="cnt_h">
                  <h1>Hello</h1>
                </div>
                <div className="mid_cnt">
                  <h3>A Bit About Me</h3>
                  <div className="description">
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                  </div>
                </div>
                <div className="link_btn">
                  <div className="btn_main">
                    <Link to="/resume" className="resume mb-2">Resume</Link>
                    <Link to="/projects" className="projct mb-2">Projects</Link>
                    <Link to="/contact" className="cnt mb-2">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
