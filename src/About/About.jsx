import './about.scss'
import { motion } from 'framer-motion';
const About = () => {
    const loadCV = () => {
        window.open("./YKhambir_CV.pdf");
      };
    return (
        <div className='section'>
        <div className="container-about" id='about'>
            <div className="about-picture-section">
            <motion.div 
                       initial={{opacity: 0.2, x: -100, scale: 0.8}}
                       whileInView={{opacity: 4, x: 0, scale: 1}}
                       transition={{duration: 3, }}
                       viewport={{ once: true, amount: 0.2 }}
            className="photo-block">

                <img src="./photo/profphoto.png" alt="" />         
            </motion.div>
            <motion.div 
             initial={{opacity: 0.2, x: 100, scale: 0.8}}
             whileInView={{opacity: 4, x: 0, scale: 1}}
             transition={{duration: 3, }}
             viewport={{ once: true, amount: 0.2 }}
            
            
            className='border-line'>
                <div className='border-section'></div>
            </motion.div>
            </div>
          
            <div className="about-section">
                <motion.div 
                  viewport={{ once: true, amount: 0.5 }}
                  initial={{ opacity: 1, x: -100, scale: 0.1 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 3 }}
                className="div">

<h1
                   
                   >About Me.</h1>
                   <div 
                     
                    className='box-style'></div>
                </motion.div>
           
                <p> &mdash; Frontend Developer specializing in React.js and JavaScript,
                     with hands-on experience in Redux Toolkit and Material-UI. 
                    I excel at building responsive, user-centric web applications and 
                    am keen on optimizing performance and enhancing usability.
                    Currently engaged in real-world projects, I am eager to contribute 
                    to a team that values innovation, continuous learning, and qual.</p>
                    <p>
                   <span>  &mdash; My Skills Are: </span>  
                    HTML, CSS, SCSS, JavaScript, Version Control (Git), React JS, Material UI, Bootstrap, API, Redux, TypeScrip, WordPress.
                    </p>

                    <button className='button-CV' onClick={loadCV}>Download CV</button>
            </div>

        </div>
        </div>
    )
}

export default About;