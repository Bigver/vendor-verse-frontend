import { useState, useEffect } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { requestMethod } from "../../requestMethod";
import { toast } from 'react-toastify';
import NavbarDetail from "../../components/restaurant/NavbarDetail";

const CartPage = () => {
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)
  const params = useParams();

  const [cartItems, setCartItems] = useState(() => {
    // ดึงข้อมูลจาก localStorage เมื่อ component ถูก mount
    const savedCart = localStorage.getItem("cartItemsResturant");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // บันทึก cartItems ลง localStorage ทุกครั้งที่มีการเปลี่ยนแปลง
    localStorage.setItem("cartItemsResturant", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index] = { ...newCartItems[index], quantity: newCartItems[index].quantity + 1 };
    setCartItems(newCartItems);
  };

  const updateCart = (index: number, quantity: number) => {
    if (quantity <= 1) {
      removeItem(index);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[index] = { ...newCartItems[index], quantity: newCartItems[index].quantity - 1 };
      setCartItems(newCartItems);
    }
  };

  const removeItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleDetail = (item: any) => {
    Swal.fire({
      html: `
        <strong>เมนู:</strong> ${item.name} <br>
        <strong>ท็อปปิ้ง:</strong> ${item.nameItem1.join(", ") || "ไม่มี"} <br>
        <strong>เพิ่มเติม:</strong> ${item.nameItem2.join(", ") || "ไม่มี"} <br>
        <strong>รายละเอียดเพิ่มเติม:</strong> ${item.detail || "ไม่มีข้อมูลเพิ่มเติม"}
      `,
    });
  };

  const handleSubmit = async () => {
    const newArray = cartItems.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price * item.quantity,
      quantity: item.quantity,
      addmore1: item.nameItem1,
      addmore2: item.nameItem2,
      detail: item.detail
    }));
    const total = cartItems
      .reduce(
        (total: any, item: any) => total + item.quantity * item.price,
        0
      )
      .toFixed(2);
    const table_id = localStorage.getItem("table_id");
    try {
      const response = await axios.post(`${requestMethod}/restaurant/order/create`, {
        store_id: data.store_id,
        item_detail: newArray,
        price: Number(total),
        table_id: Number(table_id),
        package_id: data.storeOwner.package_id
      });
      if (response.status === 201) {
        toast.success('สั่งอาหารแล้ว');
        localStorage.removeItem("cartItemsResturant");
        window.location.href = `/restaurant/${params.nameStore}/checkout`;
      }
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด");
    }
  };

  const table_id = localStorage.getItem("table_id");

  return (
    <div className={`body-restaurant ${data.theme}`}>
      <NavbarDetail link={String(params.nameStore)} table_id={String(table_id)} />
      <div className="cart-ctn2">
        <h1 style={{ textAlign: 'center' }} className="header-cart">CART</h1>
        <div className="cart">
          {cartItems.map((item: any, index: any) => (
            <div className="product" key={index}>
              <div className="card">
                <div className="img"><img src={item.image} alt="" /></div>
                <div className="text">
                  <h1>{item.name}</h1>
                  <div className="text-1">
                    <p>฿{item.price}</p>
                  </div>
                  <div className="btn">
                    <button onClick={() => handleDetail(item)}>detail</button>
                  </div>
                  <div className="quantity">
                    <h2>QUANTITY</h2>
                    <button onClick={() => updateCart(index, item.quantity)}>-</button>
                    <h3>{item.quantity}</h3>
                    {item.quantity >= item.stock ? <button >+</button> :
                      <button onClick={() => addToCart(index)}>+</button>
                    }
                  </div>
                  <a className='del' onClick={() => removeItem(index)}><IoTrashBinOutline size={20} color='red' /></a>
                </div>
              </div>
              <u></u>
            </div>
          ))}
        </div>
        <div className="total-price">
          <div className="content">
            <div className='text-ctn'>
              {cartItems.map((item: any, index: any) => (
                <div className="text" key={index}>
                  <h1>{item.name} </h1>
                  <h1>฿ {item.price * item.quantity}</h1>
                </div>
              ))}
              <u></u>
            </div>
            <div className="check-out">
              <div className="text">
                <h1>TOTAL</h1>
                <h1>฿ {cartItems
                  .reduce(
                    (total: any, item: any) => total + item.quantity * item.price,
                    0
                  )
                  .toFixed(2)
                }</h1>
              </div>
              {cartItems.length === 0 ? 
                <button onClick={handleSubmit} disabled>CHECK OUT</button>
                : <button onClick={handleSubmit}>CHECK OUT</button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
