import Navbar from '../../components/main/Navbar'
import React, { useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import axios from 'axios';
import { requestMethod } from '../../requestMethod';
import Footer from '../../components/main/Footer';

const ProfilePage = () => {
    const { user } = useAuth(); // ดึงข้อมูล token จาก context
    const [username, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.put(
                `${requestMethod}/users/profile/${user?.id}`,
                { username, phone },
                {
                    headers: {
                        Authorization: `Bearer ${user?.token}`, // ใส่ token เพื่อยืนยันตัวตน
                    },
                }
            );

            alert(res.data.message);
        } catch (error: any) {
            console.error(error.response?.data?.message || "Error updating profile");
        }
    };

    return (
        <div>
            <Navbar nav="navbar-ctn" />
            <div className='profile-page'>
                <form className="profile-form" onSubmit={handleUpdateProfile}>
                    <h2>Update Profile</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <a href="/forgot-password">reset-password</a>
                    <button type="submit" className="btn-submit">Update Profile</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage