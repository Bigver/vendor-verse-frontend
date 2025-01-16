import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // ใช้ useParams เพื่อรับ token
import axios from 'axios';
import Footer from '../../components/main/Footer';
import Navbar from '../../components/main/Navbar';
import { requestMethod } from '../../requestMethod';

const ResetPasswordPage: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { token } = useParams<{ token: string }>(); // รับ token จาก URL
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post(`${requestMethod}/users/reset-password/${token}`, { password });
            setSuccess(response.data.message);
            setTimeout(() => navigate('/login'), 3000); // นำผู้ใช้ไปที่หน้า login หลังจากสำเร็จ
        } catch (err: any) {
            setError(err.response?.data?.message || 'Something went wrong.');
        }
    };

    return (
        <div>
            <Navbar nav="navbar-ctn" />
            <div className='reset-password-page'>
                <div className="reset-password-container">
                    <h2>Reset Your Password</h2>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>New Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="reset-btn">Reset Password</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default ResetPasswordPage;