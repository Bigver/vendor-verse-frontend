import  { useState, useEffect } from 'react'
import Navbar from '../../components/main/Navbar'
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import {  isAfter } from 'date-fns';
import Loading from '../../components/main/Loading';

const PerPackage = () => {
    const [packages, setPackage]: any[] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
    const params = useParams();
    const token: any = localStorage.getItem('token');
    let user: any
    const navigate = useNavigate();



    useEffect(() => {
        if (token) {
            user = jwtDecode(token);
            if (params.user_id !== String(user.id)) {
                navigate('/manage')
            }
        }
        const fetchData = async () => {
            try {
                const response = await axios.get(`${requestMethod}/storeOwner/findId/${params.store_id}`); // URL ของ API ที่เราสร้างไว้
                const expiryDate = new Date(response.data.end_date); // แปลงวันหมดอายุเป็น Date
                const isExpired = isAfter(new Date(), expiryDate); // ตรวจสอบว่าหมดอายุหรือไม่
                if (response.data.package_id !== 1) {
                    if (isExpired) {
                        return
                    }
                    navigate('/manage')
                }
                setLoading(false)
            } catch (error) {
                toast.error('Failed to fetch Data');
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${requestMethod}/package`); // URL ของ API ที่เราสร้างไว้
                setPackage(response.data);
                setLoading(false)
            } catch (error) {
                toast.error('Failed to fetch Data');
            }
        };
        fetchData();
    }, []);


    const [select, setSelect]: any = useState();
    const [step, setStep] = useState('SELECT-PACKAGE');
    const handleOnClick = async () => {
        if (!select) {
            return
        } else {
            setStep('PAYMENT')
        }
    }
    const [files, setFile]: any = useState('')
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
            if (data.data.amount === select.price) {
                toast.success('สลิปถูกต้อง');
            } else {
                toast.error('สลิปไม่ถูกต้อง');
            }
        } catch (error) {
            toast.error("Error fetching data")
        }

    }
    const currentDate = new Date();
    const expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + 31);
    const formattedDate = expirationDate.toISOString().split('T')[0];

    const handleSubmit = async () => {
        try {
            if (!slipOk) {
                toast.warning('เกิดข้อผิดพลาด โปรดชำระเงินหรืออัพโหลดสลิปให้ถูกต้อง')
                return
            }
            await axios.put(`${requestMethod}/storeOwner/${params.store_id}`, {
                package_id: select.id,
                end_date: formattedDate,
                price: select.price,
                image: image
            });
            setStep("FINISH")
            toast.success("Store Owner updated successfully!");
        } catch (error) {
            toast.error("Failed to update Store Owner.");
        }
    }
    return (
        <div>
            <Navbar nav='navbar-ctn' />
            <div className="step-ctn">
                <div className="header"><h1>{step}</h1></div>
                <div className="container-fluid">
                    <br /><br />
                    <ul className="list-unstyled multi-steps">
                        <li className={`${step === "SELECT-PACKAGE" ? 'is-active' : ''}`}>SELECT PACKAGE</li>
                        <li className={`${step === "PAYMENT" ? 'is-active' : ''}`}>PAYMENT</li>
                        <li className={`${step === "FINISH" ? 'is-active' : ''}`}>FINISH</li>
                    </ul>
                </div>
                <div className='content-ctn'>
                    {step === 'SELECT-PACKAGE' ? <>
                        {
                            loading ? <Loading/> : (
                                <div>
                                    {packages.slice(1, 3).map((item: any) => (
                                        <div key={item.id} className="card" style={{ marginBottom: "50px" }}>
                                            <div className="text">
                                                <div>
                                                    <h1>{item.name}</h1>
                                                    <p>{item.detail}</p>
                                                    <div className="price">
                                                        <h1>{item.price} <span> ฿ /month</span></h1>
                                                    </div>
                                                    <div className="feature">
                                                        <h2>&#183; {item.order} order/day</h2>
                                                        <h2>&#183; {item.product} product</h2>
                                                        <h2>&#183; {item.duration} day</h2>
                                                    </div>
                                                    <div className="input">
                                                        <input type="radio" style={{ scale: '1.5', marginTop: '30px' }} name='web' onChange={() => setSelect(item)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </> : ""}
                    {step === 'PAYMENT' ? <>
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
                        </div></> : ""}
                    {step === 'FINISH' ?
                        <div className="card">
                            <div className="img"><img alt="" src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736766978/fornt-end-vendorverse/complete_gzgkv5.png" style={{ width: '120px' }} /></div>
                            <div className="text" style={{ paddingBottom: '20px' }}>
                                <h1>สำเร็จ</h1>
                            </div>
                        </div> : ""}
                </div>
                <div className='link' style={{ gap: '7rem', justifyContent: 'center' }}>
                    {step === 'SELECT-PACKAGE' ? <>
                        <a onClick={() => handleOnClick()}>NEXT</a>
                    </> : ""
                    }
                    {step === 'PAYMENT' ? <>
                        <a onClick={() => setStep("SELECT-PACKAGE")}>BACK</a>
                        <a onClick={() => handleSubmit()}>NEXT</a>
                    </> : ""
                    }
                    {step === 'FINISH' ? <>
                        <a href='/manage'>จัดการร้านค้า</a>
                    </> : ""
                    }
                </div>
            </div>

        </div>
    )
}

export default PerPackage