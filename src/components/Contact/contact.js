import React from "react";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      {/* <h2 className="purple hcontact">Contact Me</h2> */}
      <h1 className="contact">FIND ME ON</h1>
         <p className="contact">
           Feel free to <span className="purple">connect </span>with me
         </p>
         <ul className="home-about-social-links">
           <li className="social-icons">
             <a
               href="https://github.com/Mariam1341"
               target="_blank"
               rel="noreferrer"
               className="icon-colour  home-social-icons"
             >
               <AiFillGithub />
             </a>
           </li>
           <li className="social-icons">
             <a
               href = "mailto:mariam.mohammed1341@gmail.com"
               target="_blank"
               rel="noreferrer"
               className="icon-colour home-social-icons"
             >
               <AiOutlineMail/>
             </a>
           </li>
           <li className="social-icons">
             <a
               href="https://www.linkedin.com/in/mariam-mohammed-45bb47234"
               target="_blank"
               rel="noreferrer"
               className="icon-colour  home-social-icons"
             >
               <FaLinkedinIn />
             </a>
           </li>
           <li className="social-icons">
             <a
               href="https://wa.me/201012540959"
               target="_blank"
               rel="noreferrer"
               className="icon-colour  home-social-icons"
             >
               <AiOutlineWhatsApp />
             </a>
           </li>
          
         </ul>
    </section>
  );
};

export default Contact;