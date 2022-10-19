import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <span className='name'>
            inshorts clone made by -{" "}
            <a href='www.google.com' >
                Kunal Das
            </a>
        </span>
        <hr style={{width:"90%"}}/>
        <div className='iconContainer'>
            <a href='www.google.com'>
            <i className="fa-brands fa-instagram"></i>
            </a>
            <a href='www.google.com'>
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href='www.google.com'>
            <i className="fa-solid fa-link"></i>
            </a>
            

        </div>
      </div>
    </div>
  )
}

export default Footer
