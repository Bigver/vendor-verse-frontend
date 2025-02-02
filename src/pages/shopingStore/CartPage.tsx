import { useState, useEffect } from "react";
import Navbar from '../../components/shopingStore/Navbar/Navbar'
import { Link } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";
import Footer from '../../components/shopingStore/Footer/Footer';

const CartPage = () => {
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)
  const [cartItems, setCartItems] = useState(() => {
    // ดึงข้อมูลจาก localStorage เมื่อ component ถูก mount
    const savedCart = localStorage.getItem("cartItemsStore");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // const price : any = cartItems.reduce((total: any, item: any) => total + item.quantity * item.price,0)
  // const totalPrice : any = price + data.shipping.price
   

  useEffect(() => {
    // บันทึก cartItems ลง localStorage ทุกครั้งที่มีการเปลี่ยนแปลง
    localStorage.setItem("cartItemsStore", JSON.stringify(cartItems));
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



  return (
    <div style={{ fontFamily: data.font }}>
      <Navbar logo={data.navbar.logo} category={data.category} link={data.name_store} color={data.navbar.text_color} template={data.navbar.template} background={data.navbar.background_color} />
      <div className="cart-ctn1" style={{ marginBottom: '150px' }}>
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
                  <div className="quantity">
                    <h2>QUANTITY</h2>
                    <a onClick={() => updateCart(index, item.quantity)}>-</a>
                    <h3>{item.quantity}</h3>
                    {item.quantity >= item.stock ? <a >+</a> :
                      <a onClick={() => addToCart(index)}>+</a>
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
                  <h1>{item.name}</h1>
                  <h1>฿ {item.price * item.quantity}</h1>
                </div>
              ))}
              <u></u>
              {data.shipping ?
                <div className="text" style={{ marginTop: '20px' }}>
                  <h1>ค่าจัดส่ง</h1>
                  <h1>฿ {data.shipping.price}</h1>
                </div> : ""}


            </div>
            <div className="check-out">
              <div className="text">
                <h1>TOTAL</h1>
                <h1>฿ {cartItems.reduce((total: any, item: any) => total + item.quantity * item.price,0) + data.shipping.price}</h1>
              </div>
              <Link to={`/store/${data.name_store}/information`} className='link'>
                <button>CHECK OUT</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <Footer logo={data.navbar.logo} category={data.category} link={data.name_store} link_contact={[data.section6.link_facebook, data.section6.link_instragram, data.section6.link_line]} detail={data.footer.detail_footer} template={data.footer.template} color={data.footer.text_color} background={data.footer.background_color} />
    </div>
  )
}

export default CartPage