import { forwardRef, useRef } from 'react'
import './contact.scss'

const Contact = forwardRef ((props, ref)=> {

    const formRef = useRef(null);
    
    const onSubmit = async (event) => {
       

        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bcd2dbda-8871-4105-935b-0d78a1499ca9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

    
      
        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity(); 
            return;
          };
        
         
          if (res.success) {
            console.log('Submit form') 
            formRef.current.reset();
            }
    
         
      };


    return(
        <div ref={ref} className="contact-section" id='contact'>
            <div className="contact-container">
                <h1 className='text-title'>Contact Me</h1>
                <p>Get in touch</p>

              <div className="contact-section-form">

        <div className="contact__talk-section">
                    <h1 className='text-fonts'>Talk to me</h1> 
                    <div className="contact-message-section">
                       <img src="./email.png" alt="email" className='logo'/>
                       <span>Email</span>
                       <span>the.khambir@gmail.com</span>
                    </div>
                    <div className="contact-message-section">
                       <img src="./whatsapp.png" alt="" className='logo'/>
                       <span>Whatsapp</span>
                       <span>+49177-973-65-54</span>
                    </div>
                    <div className="contact-message-section">
                       <img src="./telegram.png" alt="" className='logo'/>
                       <span>Telegram</span>
                       <span>@khambir777</span>
                    </div>
                    
                </div>

                {/* Web3forms contact form email */}


                <form ref={formRef} onSubmit={onSubmit}  className="contact-form">
                <h1 className='text-fonts'>Write me</h1>
                    <label htmlFor="">Your name</label>
                    <input type="text"  placeholder='Enter you name' name='name' required/>
                    <label htmlFor="">Your Email</label>
                    <input type="email"  placeholder='Enter your email' name='email' required/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn btn-contact-submit' >Submit now
                    </button>
                </form>


              </div>

            

            </div>
        </div>
    )
})
export default Contact