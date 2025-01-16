import React, { useState } from 'react';
import axios from 'axios';
import { requestMethod } from '../../requestMethod';
import Navbar from '../../components/main/Navbar';
import Footer from '../../components/main/Footer';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setError('Please enter a valid email.');
            return;
        }

        try {
            const response = await axios.post(`${requestMethod}/users/forgot-password`, { email });
            setMessage(response.data.message);
            setError('');
        } catch (err: any) {
            setMessage('');
            setError('Error sending reset password link. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar nav={'navbar-ctn'}/>
            <div className='forgot-password-page'>
                <h1>Forgot Password</h1>
                <p>Please enter your email to reset your password.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>

                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <Footer />
        </div>
    );
};

export default ForgotPasswordPage;