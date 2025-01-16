import React, { useState, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface ContentProps {
    image: string[];
    link: string;
    color: string;
    background: string;
    title: string;
    detail: string;
}

const Template3: React.FC<ContentProps> = ({ color, background, image , link , title , detail}) => {
    const [backgrounds, setBackgrounds] = useState(background)
    useEffect(() => {
        if (image != null) {
            setBackgrounds("")
        }
    }, [])
    return (
        <div className='home-ctn-3' style={{ backgroundColor: backgrounds }}>

            <div className="content" style={{ color: color }}>
                <div className="text" data-aos="zoom-in" data-aos-duration="1000">
                    <h1>{title}</h1>
                    <p>{detail}</p>
                    <Link to={`/store/${link}/products/all`}>
                        <button style={{ backgroundColor: color, color: background }}>Shop Now <GoArrowUpRight /></button>
                    </Link>
                </div>
                <img src={image[0]} alt="" />
            </div>
        </div>
    )
}

export default Template3