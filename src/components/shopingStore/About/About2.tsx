import React from 'react'
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

interface ContentProps {
  image: string;
  title: string;
  detail: string;
  link: string;
  color: string;
  background: string;
}
const About2: React.FC<ContentProps> = ({ image, title, detail, link, color, background }) => {
  return (
    <div style={{background : background}}>
      <div className='about-template1' style={{ backgroundColor: background }}>
        <div className="text" style={{ color: color }}>
          <h1 data-aos="fade-up" data-aos-duration="500">{title}</h1>
          <p data-aos="fade-up" data-aos-duration="1000">{detail}</p>
          <Link to={`/store/${link}/products/all`}>
            <button data-aos="fade-up" data-aos-duration="1200" style={{ backgroundColor: color, color: background }}>Shop Now  <GoArrowUpRight /></button>
          </Link>
        </div>
        <div className="img" data-aos="fade-up" data-aos-duration="1000">
          <img src={image[0]} alt="" />
        </div>
      </div>
    </div>

  )
}

export default About2