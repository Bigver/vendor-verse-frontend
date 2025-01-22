import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";



interface ContentProps {
    category: string[];
    logo: string;
    link: string;
    link_contact: string[];
    detail: string;
    color: string;
    background: string;
}

const Footer1: React.FC<ContentProps> = ({ category, logo, link, link_contact, detail, color, background }) => {
    return (
        <div className='footer-ctn1' style={{ backgroundColor: background, color: color }}>
            <div className="content1" data-aos="fade-right"
                data-aos-duration="1000">
                <div className="logo">
                    <div className='logo'><Link to={`/store/${link}/homepage`}><img src={logo} alt="" /></Link></div>
                    <p>{detail}</p>
                </div>
            </div>
            <div className="content2" data-aos="fade-right"
                data-aos-duration="2000">
                <h1 className='header'>SHOP</h1>
                <ul>
                    <li><a href={`/store/${link}/products/all`} style={{ color: color }}>all</a></li>
                    {category.slice(0, 4).map((item, index) => (
                        <li key={index}><a href={`/store/${link}/products/${item}`} style={{ color: color }}>{item}</a></li>
                    ))}
                </ul>
            </div>
            <div className="content3" data-aos="fade-right"
                data-aos-duration="3000">
                <h1 className='header'>SOCIAL</h1>
                <ul>
                    {link_contact[0] === "/s" ? ""
                        : <li><a href={link_contact[0]} style={{ color: color }}><FaFacebookF size={22} /></a></li>
                    }
                    {link_contact[1] === "/" ? ""
                        : <li><a href={link_contact[1]} style={{ color: color }}>< FaInstagram size={22} /></a></li>
                    }
                    {link_contact[2] === "/" ? ""
                        : <li><a href={link_contact[2]} style={{ color: color }}>LINE</a></li>
                    }
                </ul>
            </div>
            <div className="content4" data-aos="fade-right"
                data-aos-duration="3000">
                <div className="btn">
                    <Link to={`/store/${link}/products/all`}>
                        <button>SHOP NOW <GoArrowUpRight /> </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Footer1