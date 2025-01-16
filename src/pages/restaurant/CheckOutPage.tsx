import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { requestMethod } from "../../requestMethod";
import NavbarDetail from '../../components/restaurant/NavbarDetail';


const CheckOutPage = () => {

  const params = useParams();
  const [orderData, setOrderData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const [text, setText]: any[] = useState("");
  const table_id = localStorage.getItem("table_id");
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/restaurant/order/findlast/${data.store_id}/${table_id}`);
        setOrderData(response.data);
        setLoading(false)
      } catch (error) {
        setText('ไม่พบรายการอาหาร!')
      }
    };
    fetchData();
  }, []);

  return (
    <div className={`body-restaurant ${data.theme}`} >
      <NavbarDetail link={String(params.nameStore)} table_id={String(table_id)}/>
      <div className="cart-ctn3">
        <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }} className='header-cart'>รายการสั่งซื้อโต๊ะ {table_id}</h1>
        <div className="cart">
          {loading ? <div><h4 style={{ textAlign: 'center', fontWeight: 'normal' }}>{text}</h4></div> :
            <div>
              {orderData.item_detail.map((item: any, index: any) => (
                <div className="product-checkout" key={index}>
                  <div className="card">
                    <div className="text">
                      <div className='text-2'>
                        <div className='quantity-1'>
                          <h1>{item.quantity}</h1>
                        </div>
                        <div className="text-3">
                          <h1>{item.name}</h1>
                          {
                            item.addmore2.length > 0 ? <div>
                              {item.addmore2.map((item: any) => (
                                <p>-{item}</p>
                              ))}
                            </div> : ""
                          }
                          {
                            item.addmore1.length > 0 ? <div>
                              {item.addmore1.map((item: any) => (
                                <p>-{item}</p>
                              ))}
                            </div> : ""
                          }
                          {
                            item.detail === "ไม่ได้เพิ่มรายละเอียด" ? "" : 
                            <p style={{marginTop : '4px'}}>-{item.detail}</p>
                          }
                        </div>
                      </div>
                      <div className="text-1">
                        <p>฿{item.price}</p>
                      </div>
                    </div>
                  </div>
                  <u></u>
                </div>
              ))}
              <div className="total-price-1">
                <div className="content">
                  <div className="check-out">
                    <div className="text">
                      <h1>TOTAL</h1>
                      <h1>฿ {orderData.price} </h1>
                    </div>
                    <div className="btn-1">
                      <Link to={`/restaurant/${String(params.nameStore)}/homepage/${table_id}`}>
                        <button>สั่งอาหารเพิ่ม</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>

  )
}

export default CheckOutPage