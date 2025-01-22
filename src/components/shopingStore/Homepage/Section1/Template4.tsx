import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

interface ContentProps {
    image: string[];
    title: string;
    detail: string;
    link: string;
    color: string;
    background: string;
}
const Template4: React.FC<ContentProps> = ({ image, title, detail, link, color, background }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [image.length]);
    return (
        <div className='template-section1-4' style={{ color: color, backgroundColor: background }}>
            <div className="content">
                <div className="text" data-aos="zoom-in" data-aos-duration="1000">
                    <h1>{title}</h1>
                    <p>{detail}</p>
                    <Link to={`/store/${link}/products/all`}>
                        <button style={{ backgroundColor: color, color: background }}>Shop Now <GoArrowUpRight /></button>
                    </Link>
                </div>
            </div>
            <div className="content">
                <div className="img" data-aos="zoom-out-left" data-aos-duration="1000">
                    <div className="slider-container">
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {image.map((image, index) => (
                                <div className="slide" key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="dots">
                            {image.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${currentIndex === index ? "active" : ""}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Template4