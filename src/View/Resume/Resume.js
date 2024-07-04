import React from "react";
import "./resume.css";

function Resume() {
  return (
    <>
      <section id="resume-section">
        <div className="container">
          <h1>Resume</h1>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="heading">
                <h2>Work Experience</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="rsm_about">
                <div className="abt_time">2035 - Present</div>
                <div className="abt_jb">
                  <h4>Editor</h4>
                  <div className="jb_dscpt">
                    <p>
                      I'm a paragraph. Click here to add your own text and edit
                      me. It’s easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="heading">
                <h2>Education</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="rsm_about">
                <div className="abt_time">2035 - Present</div>
                <div className="abt_jb">
                  <h4>Editor</h4>
                  <div className="jb_dscpt">
                    <p>
                      I'm a paragraph. Click here to add your own text and edit
                      me. It’s easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="heading">
                <h2>Skills & Expertise</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="rsm_about">
                <div className="abt_time"></div>
                <div className="abt_jb">
                  <h4></h4>
                  <div className="skils">
                    <li>
                      I'm a paragraph. Click here to add your own text and edit
                      me.
                    </li>
                    <li>
                      I'm a paragraph. Click here to add your own text and edit
                      me.
                    </li>
                    <li>
                      I'm a paragraph. Click here to add your own text and edit
                      me.
                    </li>
                    <li>
                      I'm a paragraph. Click here to add your own text and edit
                      me.
                    </li>
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

export default Resume;
