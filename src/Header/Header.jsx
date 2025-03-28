import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./stile.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";

const HeaderBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMenuClick = () => {
    setOpen(false);
  };

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <header className={`header-section ${isVisible ? "visible" : ""}`}>
      <div className="header-container">
        <div
          className={`header-navBar ${isOpen ? "active" : "RiCloseLargeFill"}`}
        >
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={handleMenuClick}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="burger-btn" onClick={toggleMenu}>
        {isOpen ? (
          <RiCloseLargeFill size={34} color="white" className="icon-shadow" />
        ) : (
          <AiOutlineMenu size={34} color="white" className="icon-shadow" />
        )}
      </button>
    </header>
  );
};

export default HeaderBlock;
