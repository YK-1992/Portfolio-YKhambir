import "./style-introduc.scss"
import Links from '../contacts.json'
import HeaderBlock from "../Header/Header"
import { motion } from "motion/react"
const Introduction = () => {
    return (
<>
<div className="container-introduction" id="home">
<HeaderBlock/>
<div className="interface-pages">
<img src="./photo/my photo-portfolio.png" alt="" />
</div>

    <div className="name-section">
        <span>Hallo</span>
        <h1>I`M YAROSLAV KHAMBIR!</h1>
        <p> 
    <span> &mdash; FRONT END DEVELOPER,</span> with knowledge in web development and design, I offer the best projects resulting in quality work. 
        </p>
        
        <div className="links-block">
    {Links.map((item, index) =>(
        <div key={index} className="links-button">
            <a href={item.web}>
            <img src={item.icon}  alt=""/>     
            </a>
           
            
        </div>
    ))

    }
            </div>
            </div>
           
</div>
</>
    )
}

export default Introduction;