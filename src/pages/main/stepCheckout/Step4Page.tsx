import  { useEffect, useState } from 'react'
import Navbar from '../../../components/main/Navbar'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { requestMethod } from "../../../requestMethod";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Step4Page = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const savedCart = localStorage.getItem("cartItems");
  const cartItems = savedCart ? JSON.parse(savedCart) : [];
  const token: any = localStorage.getItem('token');
  let user: any
  
  useEffect(() => {
    if (cartItems[0].package.id != 0 && cartItems[0].permission === false) {
      navigate('/step2')
    }
    if (cartItems.selectShop === null) {
      navigate('/step3')
    }
    if (cartItems.length < 1) {
      navigate('/package')
    }
    if (token === null) {
      navigate('/login')
    }
  }, []);

  const handleSelect = async (data: any) => {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + 31);
    const formattedDate = expirationDate.toISOString().split('T')[0];
    if (token) {
      user = jwtDecode(token);
    }
    if(data === ''){
      toast.warning('กรอกชื่อร้านค้า');
    }
    try {
      const response = await axios.post(`${requestMethod}/storeOwner/create/store`, {
        user_id: user.id,
        name_store: data,
        select_store: cartItems[0].selectShop,
        package_id: cartItems[0].package.id,
        end_date: formattedDate,
        permission: cartItems[0].permission,
        price: cartItems[0].package.price,
        image: cartItems[0].image,
        trans_ref : cartItems[0].trans_ref
      });
      localStorage.removeItem('cartItems');
      toast.success('create store successfu');
      window.location.href = `/step5/${cartItems[0].selectShop}/${response.data.id}/${response.data.user_id}`
    } catch (error:any) {
      if(error.response.data.message){
        toast.error(error.response.data.message);
      }else{
        toast.error("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Navbar nav="navbar-ctn" />
      <div className="step-ctn">
        <div className="header"><h1>NAME WEBSITE</h1></div>
        <div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>PACKAGE</li>
            <li>PAYMENT</li>
            <li>SELECT WEBSITE</li>
            <li className="is-active">NAME WEBSITE</li>
            <li>SELECT TEMPLATE</li>            
            <li>FINISH</li>
          </ul>
        </div>
        <div className="form">
          <div className='card-ctn'>
            <div className='card'>
              <div>
                {cartItems[0].selectShop === 'store' ? <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736767866/fornt-end-vendorverse/store_i0gh2e.png" alt="" /> : ""}
                {cartItems[0].selectShop === 'restaurant' ? <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736767865/fornt-end-vendorverse/restaurant_dtm7mf.jpg" alt="" /> : ""}</div>
              <h1>เว็บไซต์ {cartItems[0].selectShop}</h1>
            </div>
            <form action="">
              <input type="text" placeholder='ตั้งชื่อร้านค้า' value={name} onChange={(e) => setName(e.target.value)} required />
            </form>
          </div>
        </div>
        <div className='link'>
          <a href="/step3">BACK</a>
          <a onClick={() => handleSelect(name)}>NEXT</a>
        </div>
      </div>
    </div>
  )
}

export default Step4Page