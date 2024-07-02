import React from "react";
import "./project.css";
import P1 from '../../images/prjct_01.jpg';

function Project() {
  return (
    <>
      <section id="project-section">
        <div className="container">
          <h1>Projects</h1>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="prjct_lft">
                <h3>Project Name 01</h3>
                <div className="prjct_abt">
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font. I’m a
                    great place for you to tell a story and let your users know
                    a little more about you.
                  </p>
                </div>
              </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="prjct_right">
              <div className="prjct_pic">
                <img className="img-fluid" src={P1} alt="pic" />
              </div>
              <p><a href="https://github.com/frontendsb">https://github.com/frontendsb</a></p>
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
