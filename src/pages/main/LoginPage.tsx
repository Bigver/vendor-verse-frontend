import { useState } from 'react';
import Navbar from '../../components/main/Navbar';
import { useAuth } from "../../context/AuthContext";


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <Navbar nav="navbar-ctn" />
      <div className='login-ctn'>
        <div className='card'>
          <div className='login'>
            <div className="header">
              <h1>Sign in</h1>
              <h4>Log in to your account below.</h4>
            </div>
            <div className='form'>
              <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='password' />
                <a href='/forgot-password'>forger password?</a>
                <button type='submit'>SIGN IN</button>
              </form>
            </div>
          </div>
          <div className='register'>
            <div className="text">
              <h1>ยินดีต้อนรับสู่ VendorVerse</h1>
              <p>กรอกรายละเอียดส่วนตัวของคุณและเริ่มการเดินทางไปกับเรา</p>
              <div className='link'>
                <a href="/register">SIGN UP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginPage