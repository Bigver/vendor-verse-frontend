import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React, { useState } from 'react';
import axios from 'axios';
import { requestMethod } from '../../../../requestMethod';
import Swal from 'sweetalert2'
interface ContentProps {
    email: string;
    phone: string;
    address: string;
    title: string;
    color: string;
    background: string;
    image: string;
    line: string;
    facebook: string;
    instragram: string;
    detail: string;
    store_id: number
}


const Contact3: React.FC<ContentProps> = ({ title, line, facebook, instragram, email, phone, address, detail, store_id }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        store_id: store_id
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`${requestMethod}/store/message`, formData); // ใช้ endpoint API ของคุณ
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Message sent successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: "",
                store_id: store_id
            });
        } catch (error: any) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Unable to send message!!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    return (
        <div className='contact-template3'>
            <div className="card">
                <div className="form">
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type="text" placeholder='E-mail' name="email"
                            value={formData.email}
                            onChange={handleChange} />
                        <input
                            type="text"
                            placeholder='Full Name'
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required />
                        <input
                            type="text"
                            placeholder='Phone'
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required />
                        <input
                            type="text"
                            placeholder='Message'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required />
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
                <div className="contact">
                    <div className="text1">
                        <h1>{title}</h1>
                        <p>{detail}</p>
                    </div>
                    <div className="text2">
                        <div className='text'>
                            <MdEmail size={30} />
                            <h4>{email}</h4>
                        </div>
                        <div className='text'>
                            <FaPhoneAlt size={30} />
                            <h4>{phone}</h4>
                        </div>
                        <div className='text'>
                            <FaLocationDot size={30} />
                            <h4>{address}</h4>
                        </div>
                    </div>
                    <div className="text3">
                        <h1>Social</h1>
                        <div className='text'>
                            <a href={`${facebook}`}><FaFacebookF size={25} /></a>
                            <a href={`${instragram}`}><FaInstagram size={25} /></a>
                            <a href={`${line}`}>LINE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact3