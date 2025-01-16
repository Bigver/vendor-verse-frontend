import { useState, useEffect } from 'react'
import Navbar from '../../components/main/Navbar'
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { format, isAfter } from 'date-fns';
import { th } from 'date-fns/locale';
import Footer from '../../components/main/Footer';
import { useNavigate } from 'react-router-dom';
import { FaAngleDoubleUp } from "react-icons/fa";
import Loading from '../../components/main/Loading';

const ManageWebsitePage = () => {
    const [data, setData]: any[] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
    const navigate = useNavigate();

    const token: any = localStorage.getItem('token');
    let decoded: any

    useEffect(() => {
        if (token === null) {
            navigate('/login')
        }
    }, []);

    useEffect(() => {
        decoded = jwtDecode(token);
        const fetchData = async () => {
            try {
                const response = await axios.get(`${requestMethod}/storeOwner/${decoded?.id}`);
                setData(response.data); // เก็บข้อมูลผู้ใช้ใน state
                setLoading(false)
            } catch (error) {
                // setError('Failed to fetch Data');
            }
        };
        fetchData();
    }, []);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return format(date, 'dd MMMM yyyy', { locale: th });
    };

    return (
        <div>
            <Navbar nav="navbar-ctn" />
            <div className='manage-ctn'>
                <h1 className='header'>MANAGE WEBSITE</h1>
                <div className='manage'>
                    {loading ? (
                        <Loading/>
                    ) : (
                        data.map((item: any) => {
                            const expiryDate = new Date(item.end_date); // แปลงวันหมดอายุเป็น Date
                            const isExpired = isAfter(new Date(), expiryDate); // ตรวจสอบว่าหมดอายุหรือไม่
                            return (
                                <div className="card" key={item.id}>
                                    {item.select_store === 'store' ? <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736767866/fornt-end-vendorverse/store_i0gh2e.png" alt="" /> : ""}
                                    {item.select_store === 'restaurant' ? <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736767865/fornt-end-vendorverse/restaurant_dtm7mf.jpg" alt="" /> : ""}
                                    <div className="text-store">
                                        <h1>{item.select_store}</h1>
                                        <p>วันหมดอายุ {formatDate(item.end_date)}</p>
                                        <p>ชื่อเว็บ {item.name_store}</p>
                                        {isExpired ? <div className="btn"><a href={`/per-package/${item.id}/${item.user_id}`} style={{ backgroundColor: 'red' }}>ต่ออายุ</a></div>
                                            :
                                            <div className="btn">
                                                <a href={`http://localhost:5174/`} target='_blank' >จัดการร้าน</a>
                                                {item.select_store === 'store' ? <a href={`${item.select_store}/${item.name_store}/homepage`} target='_blank' >เข้าสู่หน้าเว็บไซต์</a>
                                                    : ""}
                                                {item.select_store === 'restaurant' ? <a href={`${item.select_store}/${item.name_store}/homepage/1`} target='_blank'>เข้าสู่หน้าเว็บไซต์</a> : ""}

                                            </div>}
                                        {!isExpired && item.packageId.price === 0 ? <div className="upgrade"><a href={`/per-package/${item.id}/${item.user_id}`}><FaAngleDoubleUp /> PACKAGE
                                        </a></div>
                                            : ""}
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ManageWebsitePage
