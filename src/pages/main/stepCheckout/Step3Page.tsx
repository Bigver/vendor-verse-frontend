import  { useState, useEffect } from 'react'
import Navbar from '../../../components/main/Navbar'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const SelectWebPage = () => {


  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (cartItems[0].package.id != 0 && cartItems[0].permission === false) {
      navigate('/step2')
    }
    if (cartItems.length < 1) {
      navigate('/package')
    }
  }, []);

  const [select, setSelect] = useState('');

  const handleSelect = (data: any) => {
    if (!select){
      toast.warning('กรุณาเลือกร้านค้า')
      return
    }
    if (cartItems.length > 0) {
      const newCartItems = [...cartItems];
      newCartItems[0] = { ...newCartItems[0], package: cartItems[0].package, selectShop: data };
      setCartItems(newCartItems);
    }
    window.location.href = '/step4'
  }


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div>
      <Navbar nav="navbar-ctn" />
      <div className="step-ctn">
        <div className="header"><h1>SELECT WEBSITE</h1></div>
        <div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>PACKAGE</li>
            <li>PAYMENT</li>
            <li className="is-active">SELECT WEBSITE</li>
            <li>NAME WEBSITE</li>
            <li>SELECT TEMPLATE</li>            
            <li>FINISH</li>
          </ul>
        </div>
        <div className='content-ctn'>
          <div className="card-2">
            <form action="">
              <div className='input'>
                <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736767866/fornt-end-vendorverse/store_i0gh2e.png" alt="" />
                <label htmlFor="">เว็บไซต์ร้านค้า</label>
                <div>
                  <input type="radio" name='web' value="store" onChange={(e) => setSelect(e.target.value)} required />
                </div>
              </div>
              <div className='input'>
                <div>
                  <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736767865/fornt-end-vendorverse/restaurant_dtm7mf.jpg" alt="" />
                </div>
                <label htmlFor="">เว็บไซต์ร้านอาหารออนไลน์</label>
                <div>
                  <input type="radio" name='web' value="restaurant" onChange={(e) => setSelect(e.target.value)} required />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='link'>
          <a href="/step1">BACK</a>
          <a onClick={() => handleSelect(select)}>NEXT</a>
        </div>
      </div>
    </div>
  )
}
