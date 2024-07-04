import React from 'react'
import './contact.css';

function Contact({ closeModal }) {
  return (
    <>
    <div id='contact-form'>
        <div className='cnt_box'>
            <button className='close_btn'onClick={() => {closeModal(false)}}><i className="fa-solid fa-xmark"></i></button>
            <h3>Contact Me</h3>
            <p>Looking forward to hearing from you.</p>
            <div className='my_cnt'>
                <p><i className="fa-solid fa-phone"></i></p>
                <a href='tel:(+91)9163482544'>(+91)9163482544</a>
                <p><i className="fa-solid fa-envelope"></i></p>
                <a href="mailto:sutapa20497@gmail.com">sutapa20497@gmail.com</a>
                <p><i className="fa-brands fa-linkedin"></i></p>
                <a href="https://www.linkedin.com/in/sutapa-biswas-0ba849250/"></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact