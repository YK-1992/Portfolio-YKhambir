// File: Projects.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import './projects.css';
import Script from './script.json';

const Projects = () => {
  const [items, setItems] = useState(Script);
  const [direction, setDirection] = useState('');
  const sliderRef = useRef(null);

  const handleDirectionClass = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.classList.remove('next', 'prev');
    void sliderRef.current.offsetWidth; // force reflow
    sliderRef.current.classList.add(dir);
  };

  const nextSlide = () => {
    setDirection('next');
    handleDirectionClass('next');
    setItems((prev) => [...prev.slice(1), prev[0]]);
  };

  const prevSlide = () => {
    setDirection('prev');
    handleDirectionClass('prev');
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    const timeout = setTimeout(() => {
      sliderRef.current.classList.remove('next', 'prev');
    }, 600); // Match animation duration
    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <div className="container-projects" id='projects'>
      <div className={`slider ${direction}`} ref={sliderRef}>
        <div className="list">
          {items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.backgroundImage} alt={item.name} />
              <div className="content">
                <div className="type">{item.name}</div>
                <div className="description"><p>{item.intro}</p></div>
                <div className="button">
                  <a href={item.demo} target="_blank" rel="noopener noreferrer">
                    <IoMdLink color="#fff" size="27px" />
                  </a>
                  <a href={item.git} target="_blank" rel="noopener noreferrer">
                    <FaGithub color="#fff" size="27px" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.backgroundImage} alt={item.name} />
            </div>
          ))}
        </div>

        <div className="nextPrevArrows">
          <button className="prev" onClick={prevSlide}><FaArrowLeft /></button>
          <button className="next" onClick={nextSlide}><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
