import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
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
    store_id: number
}


const Contact2: React.FC<ContentProps> = ({ email, phone, title, image, store_id }) => {
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
        <div className='contact-template2' data-aos="fade-up" data-aos-duration="1000">
            <div className="card">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <div className="form" >
                    <h1>{title}</h1>
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
                    <div className="text">
                        <h3><MdEmail color='black' size={30} /> {email}</h3>
                        <h3><FaPhoneAlt color='black' size={20} /> {phone}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact2