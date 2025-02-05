import  { useState, useEffect } from 'react'
import Navbar from '../../components/main/Navbar'
import Footer from '../../components/main/Footer'
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import Loading from '../../components/main/Loading';

const PackagePage = () => {

  const [packages, setPackage]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${requestMethod}/package`); // URL ของ API ที่เราสร้างไว้
        setPackage(response.data); // เก็บข้อมูลผู้ใช้ใน state
        setLoading(false)
      } catch (error) {
        // setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, []);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  let permission

  const handleSelect = (data: any) => {
    if (data.id === 1) {
      permission = true
    } else {
      permission = false
    }
    if (cartItems.length > 0) {
      const newCartItems = [...cartItems];
      newCartItems[0] = { ...newCartItems[0], package: data, permission: permission, image: '' };
      setCartItems(newCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          package: data,
          permission: permission
        },
      ]);
    }
    window.location.href = '/step1'
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <div className="app">
      <Navbar nav="navbar-ctn" />
      <div className="package-ctn">
        <div>
          {loading ? <Loading/> : (
            <>
              <div className="card-ctn">
                {packages.map((item: any) => (
                  <div className="card" key={item.id}>
                    <div className="img">
                    </div>
                    <div className="text">
                      <h1>{item.name}</h1>
                      <p>{item.detail}</p>
                      <div className="price">
                        <h1>{item.price}<span> ฿ /month</span></h1>
                      </div>
                      <div className="feature">
                        <h2>&#183; {item.order} order/day</h2>
                        <h2>&#183; {item.product} product</h2>
                        <h2>&#183; {item.duration} day</h2>
                      </div>
                      <button onClick={() => handleSelect(item)}>{item.price} ฿</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PackagePage