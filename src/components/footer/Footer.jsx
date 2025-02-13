import React from 'react'
import './footer.css'

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container"> 
        <h1 className="footer__title">Cyril A</h1>


        <ul className="footer_list">
            <li>
                <a href="#about" className="footer__link">About</a>

            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>

            </li>

            <li>
                <a href="#projects" className="footer__link">Projects</a>

            </li>

         

        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/cyril_v4m/?hl=en" className="footer__social-link" target='blank'> 
            <i class="bx bxl-instagram-alt"></i>
        </a>

        <a href="https://x.com/Cyril_v4m" className="footer__social-link" target='blank'>
            <i class="bx bxl-twitter"></i>
        </a>

        <a href="https://www.snapchat.com/add/cyril_0210?share_id=NeNVjHzIRuU&locale=en-GBt" className="footer__social-link" target='blank'>
             <i class="bx bxl-snapchat"></i>
       </a>
        </div>

        <span className="footer__copy">&#169; Cyril . All rights reseverd</span>
    </div>
   </footer>
  )
}

export default Footer
