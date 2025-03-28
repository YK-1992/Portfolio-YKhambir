import './about.scss'
const About = () => {
    const loadCV = () => {
        window.open("./CV YKhambir.pdf");
      };
    return (
        <>
        <div className="container-about" id='about'>
            <div className="about-picture-section">
            <div className="photo-block">
                <img src="./photo/profphoto.png" alt="" />         
            </div>
            <div className='border-line'>
                <div className='border-section'></div>
            </div>
            </div>
          
            <div className="about-section">
                <h1>About Me.</h1>
                <div className='box-style'></div>
                <p> &mdash; Frontend Developer specializing in React.js and JavaScript,
                     with hands-on experience in Redux Toolkit and Material-UI. 
                    I excel at building responsive, user-centric web applications and 
                    am keen on optimizing performance and enhancing usability.
                    Currently engaged in real-world projects, I am eager to contribute 
                    to a team that values innovation, continuous learning, and qual</p>
                    <p>
                   <span>  &mdash; My Skills Are: </span>  
                    HTML, CSS, SCSS, JavaScript, Version Control (Git), React JS, Material UI, Bootstrap, API, Redux, TypeScrip
                    </p>

                    <button className='button-CV' onClick={loadCV}>Download CV</button>
            </div>

        </div>
        </>
    )
}

export default About;