import React, { useState } from "react";
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowBarLeft } from "react-icons/bs";
import '../../styles/main/srcoll.scss'

const Sidebar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const links = [
        {
            label: "ร้านค้าออนไลน์",
            href: "#store",
            subLinks: [
                { label: "เริ่มต้นการใช้งาน", href: "#feature-store" },
                { label: "การเพิ่มสินค้า", href: "#feature-store-add-product" },
                { label: "อัพเดทสินค้า", href: "#feature-store-update-product" },
                { label: "รายการสั่งซื้อ", href: "#feature-store-order" },
                { label: "ข้อความติดต่อ", href: "#feature-store-message" },
                { label: "การแก้ไขหน้าเพจ", href: "#feature-store-edit-page" },

            ],
        },
        {
            label: "ร้านอาหาร",
            href: "#",
            subLinks: [
                { label: "เริ่มต้นการใช้งาน", href: "#feature-restaurant-start" },
                { label: "การเพิ่มเมนู", href: "#feature-restaurant-add-menu" },
                { label: "อัพเดทเมนู", href: "#feature-restaurant-update-menu" },
                { label: "รายการสั่งซื้อ", href: "#feature-restaurant-order" },
                { label: "การแก้ไขหน้าเพจ", href: "#feature-restaurant-edit-page" },
            ],
        },
    ];

    return (
        <>
            {/* Toggle Button */}
            <button className="toggle-button" onClick={toggleSidebar}>
                <GiHamburgerMenu size={22} />
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="close-navbar">
                    <button onClick={toggleSidebar}><BsArrowBarLeft size={20} /></button>
                </div>
                <div className="logo">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <nav className="nav">
                    <ul>
                        <li className="nav-item">
                            <div className="nav-link" >
                                <a className="link" href="#" style={{textDecoration : 'none'}}>เริ่มต้นการใช้งาน</a>
                            </div>
                        </li>
                        {links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <div
                                    className="nav-link"
                                    onClick={() => link.subLinks && toggleDropdown(index)}
                                >
                                    {link.label}
                                    {link.subLinks && (
                                        <span className="arrow">
                                            {openDropdown === index ? "▲" : "▼"}
                                        </span>
                                    )}
                                </div>
                                {link.subLinks && openDropdown === index && (
                                    <ul className="dropdown">
                                        {link.subLinks.map((subLink, subIndex) => (
                                            <li key={subIndex}>
                                                <a href={subLink.href} className="dropdown-link">
                                                    {subLink.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;