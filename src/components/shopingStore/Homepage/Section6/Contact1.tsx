import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


interface ContentProps {
    email: string;
    phone: string;
    address: string;
    title: string;
    detail: string;
    color: string;
    background: string;
}


const Contact1: React.FC<ContentProps> = ({email , phone , address , title , detail }) => {
    return (
        <div className='contact-template1' data-aos="fade-up" data-aos-duration="1000">
            <div className="text">
                <h1>{title}</h1>
                <p>{detail}</p>
                <div className='contact'>
                    <div className="card">
                        <div className="icon">
                            <h1><MdEmail size={40} /></h1>
                            <h3>{email}</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <h1><FaPhoneAlt size={40} /></h1>
                            <h3>{phone}</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <h1><FaLocationDot size={40} /></h1>
                            <h3>{address}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact1