import "./style-introduc.scss"
import Links from '../contacts.json'
import HeaderBlock from "../Header/Header"
import { motion } from "motion/react"

const name = "I`M YAROSLAV KHAMBIR";
const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.3,   
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  


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
        <motion.div className="name-style"
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', flexWrap: 'wrap', fontSize: '3.1rem', fontWeight: 'bold' }}
        >
        
        {name.split('').map((world, index) => (
          <motion.span className="name-style" key={index} variants={letter}>
            {world === ' ' ? '\u00A0' : world}
          </motion.span>
          
        ))}
      
        </motion.div>
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