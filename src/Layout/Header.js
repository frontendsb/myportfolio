import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Contact from "../component/Contact";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header id="header-section">
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            Sutapa Biswas <span>Editor</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact' onClick={() => {setOpenModal(true)}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </header>
      {openModal &&<Contact closeModal={setOpenModal}/>}
    </>
  );
}

export default Header;
