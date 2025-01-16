import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import NavbarDetail from '../../components/restaurant/NavbarDetail';
import Loading from '../../components/main/Loading';

type Item = {
  name: string;
  price: number;
};

const MenuPage: React.FC = () => {
  const params = useParams();

  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/restaurant/menu/find/${params.id}`);
        setProductData(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching product data.");
      }
    };
    fetchData();
  }, []);

  const [selectedItems1, setSelectedItems1] = useState<Item[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<Item[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, item: Item) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems1((prevItems) => [...prevItems, item]);
    } else {
      setSelectedItems1((prevItems) => prevItems.filter((i) => i.name !== item.name));
    }
  };

  const handleCheckboxChange2 = (event: React.ChangeEvent<HTMLInputElement>, item: Item) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems2((prevItems) => [...prevItems, item]);
    } else {
      setSelectedItems2((prevItems) => prevItems.filter((i) => i.name !== item.name));
    }
  };

  const totalPrice1 = selectedItems1.reduce((acc, item) => acc + item.price, 0);
  const totalPrice2 = selectedItems2.reduce((acc, item) => acc + item.price, 0);

  const nameItem1: any[] = selectedItems1.map((item: any) => item.name);
  const nameItem2: any[] = selectedItems2.map((item: any) => item.name);

  const [detail, setDetail] = useState('ไม่ได้เพิ่มรายละเอียด');
  const [quantity, setQuantity] = useState(1);

  const price = (productData.price * quantity) + totalPrice1 + totalPrice2;

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const outStock = () => {
    toast.error('สินค้าหมด');
  };

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItemsResturant");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItemsResturant", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: any) => {
    try {
      setCartItems([
        ...cartItems,
        {
          id: item.id,
          image: item.product_img[0],
          name: item.name,
          price: price,
          quantity: quantity,
          nameItem1: nameItem1,
          nameItem2: nameItem2,
          detail: detail,
        },
      ]);
      window.location.href = `/restaurant/${params.nameStore}/cart`;
    } catch {
      toast.error('Error adding to cart.');
    }
  };

  const table_id = localStorage.getItem("table_id");

  return (
    <div className={`body-restaurant ${data.theme}`}>
      <NavbarDetail link={String(params.nameStore)} table_id={String(table_id)} />
      {loading ? <Loading/> : (
        <div className="menu-ctn">
          <div className="menu-card">
            <div className="img"><img src={productData.product_img[0]} alt="" /></div>
            <div className="text">
              <h1>{productData.name}</h1>
              <p className='detail'>{productData.detail}</p>
            </div>
          </div>

          {productData.product_more.length > 0 ? (
            <div className="topping">
              <div className="text">
                <h1>ท๊อปปิ้ง</h1>
              </div>
              <form>
                <div>
                  {productData.product_more.map((item: any) => (
                    <div className="check-ctn" key={item.name}>
                      <div className='check'>
                        <input
                          type="checkbox"
                          name={item.name}
                          value={item.name}
                          onChange={(e) => handleCheckboxChange(e, { name: item.name, price: item.price })}
                        />
                        <label>{item.name}</label>
                      </div>
                      <h2>฿{item.price}</h2>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          ) : null}
          {productData.product_special.length > 0 && (
            <div className="special">
              <form>

                <div>
                  <div className="text">
                    <h1>เพิ่มเติม</h1>
                  </div>
                  {productData.product_special.map((item: any) => (
                    <div className="check-ctn" key={item.name}>
                      <div className='check'>
                        <input
                          type="checkbox"
                          name={item.name}
                          value={item.name}
                          onChange={(e) => handleCheckboxChange2(e, { name: item.name, price: item.price })}
                        />
                        <label>{item.name}</label>
                      </div>
                      <h2>฿{item.price}</h2>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          )}
          <div className="detail-more">
            <div className="text">
              <h1>รายละเอียดเพิ่มเติม</h1>
            </div>
            <form>
              <input type="text" name='detail' placeholder='เช่นไม่เอาผัก' onChange={(e) => setDetail(e.target.value)} />
            </form>
          </div>

          <div className="add-to-cart">
            <div className="quantity">
              <a onClick={decrease}>-</a>
              <h1>{quantity}</h1>
              <a onClick={increase}>+</a>
            </div>
            <div className="btn">
              {productData.status === 'out_stock' ? (
                <button onClick={outStock}>สินค้าหมด</button>
              ) : (
                <button onClick={() => addToCart(productData)}>ใส่ตระกร้า<span>฿{price}</span></button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPage;
