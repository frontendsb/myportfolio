import React from "react";

function Footer() {
  return (
    <>
      <footer id="footer-section">
        <div className="container-fluid">
          <hr></hr>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12 col-12">
              <div className="pb-3">
                <h4>Phone</h4>
                <a href="tel:+(91)9163482544">+(91)9163482544</a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 col-12">
              <div className="pb-3">
                <h4>Email</h4>
                <a href="mailto:sutapa20497@gmail.com">sutapa20497@gmail.com</a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 col-12">
              <div className="pb-3">
                <h4>Follow Me</h4>
                <a href="https://www.linkedin.com/in/sutapa-biswas-0ba849250/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 col-12">
              <div className="pb-3">
                <p>© 2024 By Sutapa Biswas.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
