import React from 'react';
import './Contact.css';
import { GoLocation,GoMail,GoGlobe} from "react-icons/go";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import Form from'./Form/form.jsx';


export default function Contact() {
  
return (
    
<div className="contact_main">
       
        <div className="contact_main_1">
                <div className="contact_main_1-1">
                   <h1>Feel Free To Contact</h1>
                </div>

                <div className="contact_main_1-2">
                   <p>Hello everyone, if is looking my website right now , feel free to contact me & if you have any suggestion then feel free to mail me</p>
                </div>

                <div className="contact_main_1-3">
                          <div className="contact_main_1-3-1">
                                  <div className="contact_main_1-3-1-1"><GoLocation/></div>
                                  <div className="contact_main_1-3-1-2">Barmer,Rajasthan</div>
                         </div>
                         <div className="contact_main_1-3-1">
                                  <div className="contact_main_1-3-1-1"><GoMail/></div>
                                  <div className="contact_main_1-3-2-2">hiteshsukhpal@gmail.com</div>
                         </div>
                         <div className="contact_main_1-3-1">
                                  <div className="contact_main_1-3-1-1"><GoGlobe/></div>
                                  <div className="contact_main_1-3-3-3">www.com</div>
                         </div>
                </div>
                <div className="contact_main_1-4">
                          <div className="contact_main_1-3-1">
                                  <div className="contact_main_1-3-1-1"><a href={"https://www.facebook.com/"}><FaFacebookF/></a></div>
                                 
                         </div>
                         <div className="contact_main_1-3-1">
                                  <div className="contact_main_1-3-1-1"><a href={"https://www.instagram.com/"}><FaInstagram/></a></div>
                                 
                         </div>
                         <div className="contact_main_1-3-1">
                                  <div className="contact_main_1-3-1-1"><a href={"https://in.linkedin.com/"}><FaLinkedinIn/></a></div>
                                  
                         </div><a href=""></a>
                </div>
        </div>
        <div className='contact_main_2'>
        <Form/>
        </div>
</div>
);
};
