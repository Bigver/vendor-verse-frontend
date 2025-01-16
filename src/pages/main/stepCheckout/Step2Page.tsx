import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/main/Navbar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { requestMethod } from "../../../requestMethod";
import axios from "axios";


const PaymentPage: React.FC = () => {
  const navigate = useNavigate();


  useEffect(() => {
    if (cartItems.length < 1) {
      navigate('/package')
    }
  }, []);
  const [files, setFile]: any = useState('')
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });



  const [image, setImage] = useState('');

  const uploadFileHandler = async (e: any) => {
    setFile(e.target.files[0]);

    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      const { data } = await axios.post(`${requestMethod}/uploadFile`,
        bodyFormData,
      );
      setImage(data.secure_url);
    } catch (error) {
      toast.error('Image uploaded fail');
    }
  };




  const [slipOk, setSlipOk] = useState(false)

  const handleSubmitSlip = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", files);
    if (!files) {
      toast.error('กรุณาเพิ่มไฟล์');
      return
    }
    try {
      const res = await fetch(`${requestMethod}/upload/slipok`, {
        method: "POST",
        body: formData
      })

      if (res.status === 400) {
        toast.error("สลิปนี้มีการใช้งานแล้ว");
        return
      }

      if (res.ok) {
        setSlipOk(true)
      } else {
        toast.error("Failes to send a request")
        return
      }
      const data = await res.json();

      if (data.data.amount === cartItems[0].package.price) {
        const newCartItems = [...cartItems];
        newCartItems[0] = { ...newCartItems[0], package: cartItems[0].package, permission: true, image: image, price: cartItems[0].package.price, trans_ref: data.data.transRef };
        setCartItems(newCartItems);
        setSlipOk(true)
        toast.success('สลิปถูกต้อง');
      } else {
        toast.error('สลิปไม่ถูกต้อง');
      }
    } catch (err) {
      toast.error("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
    }
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSubmit = async () => {
    if (!slipOk) {
      toast.warning('เกิดข้อผิดพลาด โปรดชำระเงินหรืออัพโหลดสลิปให้ถูกต้อง')
      return
    } else {
      navigate('/step3')
    }
  }


  return (
    <div>
      <Navbar nav="navbar-ctn" />
      <div className='step-ctn'>
        <div className="header"><h1>PAYMENT</h1></div>
        <div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>PACKAGE</li>
            <li className="is-active">PAYMENT</li>
            <li>SELECT WEBSITE</li>
            <li>NAME WEBSITE</li>
            <li>SELECT TEMPLATE</li>
            <li>FINISH</li>
          </ul>
        </div>
        <div className="payment">
          <div className='text'>
            <h1>กรุณาโอนมาที่บัญชี</h1>
            <div className="card">
              <div className="head">
                <img src="https://www.kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png" alt="" />
                <h3>ธนาคารกสิกรไทบ</h3>
              </div>
              <div className="text-1">
                <h1>144130459</h1>
                <u />
                <h1>ฐิติพงศ์ โนจ๊ะ</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmitSlip}>
            <label htmlFor="">*กรุณาโอนเงินให้ตรงกับราคาแพคเกจ</label>
            <input type="file" accept='image/*' onChange={uploadFileHandler} />
            <button type='submit'>Check Slip</button>
          </form>
        </div>
        <div className='link'>
          <a href="/step1">BACK</a>
          <a onClick={() => handleSubmit()}>NEXT</a>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;