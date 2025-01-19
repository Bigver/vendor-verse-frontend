import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../assets/logo.png'
import { FaUser } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

interface Content1Props {
    nav: string;
}

const Navbar: React.FC<Content1Props> = ({ nav }) => {
    const token = localStorage.getItem('token');
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (token) {
                    setShow(true)
                }
            } catch (error) {
                setShow(false);
            }
        };
        fetchUser()
    }, []);

    const handleDropdown = (value: any) => {
        setDropdown(!value)
    }
    const [navbarShow, setNavbarShow] = useState(false)
    return (
        <div className={nav}>
            <div className="content-1">
                <div className="logo">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
            </div>
            <div className='ul'>
                <ul>
                    <li><a href="/package">แพ็คเกจ</a></li>
                    <li><a href="/blogs">บล็อค</a></li>
                    <li><a href="/feature">วิธีการใช้งาน</a></li>
                    <li><a href="/#help">ช่วยเหลือ</a></li>
                </ul>
            </div>
            {show ? (
                <div className="content-2">
                    <ul>
                        <li style={{ cursor: "pointer" }}>
                            <a onClick={() => handleDropdown(dropdown)}><FaUser size={22} style={{ marginTop: "10px", marginRight: "8px" }} /><GoChevronDown size={20} /></a>
                        </li>
                        {dropdown ? (<ul className='dropdown'>
                            <li><a href="/profile">โปรไฟล์</a></li>
                            <li><a href="/manage">จัดการเว็บไซต์</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>) : ""}

                    </ul>
                </div>
            ) :
                (<div className="content-2">
                    <ul>
                        <li><a href="login">เข้าสู่ระบบ</a></li>
                        <li><a href="register">สมัครสมาชิก</a></li>
                    </ul>
                </div>)
            }
            <div className={`ham ${navbarShow ? "show" : ""}`}>
                <div className='link'>
                    <ul>
                        <li><a href="/package">แพ็กเกจ</a></li>
                        <li><a href="/blogs">บล็อค</a></li>
                        <li><a href="/feature">วิธีการใช้งาน</a></li>
                        {token ? <>
                            <li><a href="/profile">โปรไฟล์</a></li>
                            <li><a href="/manage">จัดการเว็บไซต์</a></li>
                            <li><a href="/#help">ช่วยเหลือ</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </> : <>
                            <li><a href="login">เข้าสู่ระบบ</a></li>
                            <li><a href="register">สมัครสมาชิก</a></li></>}
                    </ul>
                </div>
            </div>
            <div className='icon'>
                <a onClick={() => setNavbarShow(!navbarShow)}><GiHamburgerMenu size={25} /></a>
            </div>
        </div>
    )
}

export default Navbar