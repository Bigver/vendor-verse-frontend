import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface ContentProps {
  image: string;
  title: string;
  detail: string;
  link: string;
  color: string;
  background: string;
}
const Template2: React.FC<ContentProps> = ({ image, title, detail, link , color , background }) => {

  return (
    <div className='home-ctn-2' style={{color : color , backgroundColor : background}}>
      <div className="content">
        <div className="text" data-aos="zoom-in" data-aos-duration="1000">
          <h1>{title}</h1>
          <p>{detail}</p>
          <Link to={`/store/${link}/products/all`}>
            <button style={{backgroundColor : color , color : background}}>Shop Now <GoArrowUpRight /></button>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="img" data-aos="zoom-out-left" data-aos-duration="1000">
          <img src={image[0]} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Template2