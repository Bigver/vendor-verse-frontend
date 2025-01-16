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
const About3: React.FC<ContentProps> = ({ image, title, detail, link, color, background }) => {
    return (
        <div>
            <div className='about-template-3'>
                <div className="content" style={{ color: color }}>
                    <div className="text" data-aos="zoom-in" data-aos-duration="1000">
                        <h1>{title}</h1>
                        <p>{detail}</p>
                        <Link to={`/store/${link}/products/all`}>
                            <button data-aos="fade-up" data-aos-duration="1200" style={{ backgroundColor: color, color: background }}>Shop Now  <GoArrowUpRight /></button>
                        </Link>
                    </div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>

    )
}

export default About3