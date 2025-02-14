import React, { useState, useEffect } from 'react'
import Navbar from '../../components/shopingStore/Navbar/Navbar';
import Footer from '../../components/shopingStore/Footer/Footer';
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/main/Loading';

const ProductPage = () => {
  const [index, setIndex] = useState(0);
  const pageData: any = localStorage.getItem('pageData');
  const params = useParams();

  const data = JSON.parse(pageData)

  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/store/product/find/${params.id}`);
        const jsonObject = {
          ...response.data,
          // product_img: JSON.parse(response.data.product_img),
          // product_more1: JSON.parse(response.data.product_more1),
          // product_more2: JSON.parse(response.data.product_more2)
        };

        setProductData(jsonObject);
        setLoading(false)
      } catch (error) {
        toast.error("error")
      }
    };
    fetchData();
  }, []);



  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItemsStore");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItemsStore", JSON.stringify(cartItems));
  }, [cartItems]);

  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOption2, setSelectedOption2] = useState('');
  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption2(event.target.value);
  };


  const [quantity, setQuantity] = useState(1)
  const increase = () => {
    setQuantity(quantity + 1)
  }
  const decrease = () => {
    if (quantity <= 1) {
      setQuantity(1)
    } else {
      setQuantity(quantity - 1)
    }
  }


  const outStock = () => {
    toast.error('สินค้าหมด');
  }


  const addToCart = (item: any) => {
    try {
      setCartItems([
        ...cartItems,
        {
          id: item.id,
          image: item.product_img[0],
          name: item.name,
          price: item.price,
          quantity: quantity,
          stock: productData.stock,
          option1: selectedOption,
          option2: selectedOption2
        },
      ]);
      toast.success('ADD TO CART');
      window.location.href = `/store/${data.name_store}/cart`
    } catch {
      toast.error('error');
    }

  }

  return (
    <div style={{ background: data.background_color, color: data.text_color, fontFamily: data.font }}>
      <Navbar logo={data.navbar.logo} category={data.category} link={data.name_store} color={data.navbar.text_color} template={data.navbar.template} background={data.navbar.background_color} />
      <div className='container-product' data-aos="zoom-in" data-aos-duration="1000" style={{ marginBottom: '150px' }}>
        {loading ? <div style={{ display: 'grid', justifyContent: 'center' }}><Loading /></div>
          :
          <div className="product-detail-container">
            <div className="product">
              <div className='img-pd'>
                <div className="image-container">
                  <img src={productData.product_img && productData.product_img[index]} className="product-detail-image" />
                </div>
                <div className="small-images-container">
                  {productData.product_img?.map((item: any, i: any) => (
                    <img
                      key={i}
                      src={item}
                      className={i === index ? 'small-image selected-image' : 'small-image'}
                      onMouseEnter={() => setIndex(i)}
                    />
                  ))}
                </div>
              </div>
              <div className='text' style={{ color: data.text_color }}>
                <h1>{productData.name}</h1>
                <p>{productData.detail}</p>
                <h2>฿{productData.price}</h2>
                {productData.product_more1.length > 0 && productData.product_more2.length > 0
                  && (<h3 style={{ marginTop: '10px' }}>select option</h3>
                  )}
                <div style={{ display: 'flex', gap: '1rem' }} className='select'>
                  {productData.product_more1.length > 0 && (
                    <div className='select'>
                      <select value={selectedOption} onChange={handleChange}>
                        <option value="" disabled>Select an option</option>
                        {productData.product_more1.map((option: any) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  {productData.product_more2.length > 0 && (
                    <div className='select'>
                      <select value={selectedOption2} onChange={handleChange2}>
                        <option value="" disabled>Select an option</option>
                        {productData.product_more2.map((option: any) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <div className='btn-ctn'>
                  <div className="quantity">
                    <a onClick={decrease}>-</a>
                    <h3>{quantity}</h3>
                    {quantity >= productData.stock ? <a >+</a> :
                      <a onClick={increase}>+</a>
                    }
                  </div>
                  <div className='btn'>
                    {productData.stock <= 0 ? <button onClick={outStock}>ADD TO CARD</button> :
                      <button onClick={() => addToCart(productData)}>ADD TO CARD</button>
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>
        }
      </div>
      <Footer logo={data.navbar.logo} category={data.category} link={data.name_store} link_contact={[data.section6.link_facebook, data.section6.link_instragram, data.section6.link_line]} detail={data.footer.detail_footer} template={data.footer.template} color={data.footer.text_color} background={data.footer.background_color} />
    </div>)
}

export default ProductPage