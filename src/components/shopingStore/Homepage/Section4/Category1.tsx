import React from 'react'
import { GoArrowRight } from "react-icons/go";

interface ContentProps {
    category: string[];
    link: string;
    color: string;
    image: string[]
}


const Category1: React.FC<ContentProps> = ({ category, link, color, image }) => {
    return (
        <div className="category-template-1">
            {category.slice(0, 3).map((item , index) => (
                <div className="card" data-aos="fade-up" data-aos-duration="700" key={index}>
                    <img src={image[index]} alt="" />
                    <a style={{color : color}} href={`/store/${link}/products/${item}`}>{item} <GoArrowRight /></a>
                </div>
            ))}
        </div>
    )
}

export default Category1