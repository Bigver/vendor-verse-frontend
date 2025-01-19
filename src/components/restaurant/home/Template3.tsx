import React, { useState, useEffect } from 'react'
import Menu from '../Menu';
import { requestMethod } from "../../../requestMethod";
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import Loading from '../../main/Loading';

interface ContentProps {
  link: string;
  store_id: number;
  category: string[];
  image: string[];
  category_template: number;
  category_image: string[];
  title: string;
  detail: string
}


const Template3: React.FC<ContentProps> = ({ link, store_id, category, title, detail, category_template, category_image }) => {
  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const [categoryActive, setCategoryActive] = useState('all'); // สถานะสำหรับตรวจสอบการโหลด
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const filteredProducts = productData.filter(
    (product: any) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) // เงื่อนไขกรองตามชื่อสินค้า
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${requestMethod}/restaurant/menu/find/menu/${store_id}/${categoryActive}`);
        setProductData(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error)
        // setError('Failed to fetch Products');
      }
    };
    fetchProducts();
  }, [categoryActive]);


  return (
    <div className='template-3-restaurant' style={{ paddingBottom: '50px' }}>
      <div className="header">
        <div className="text">
          <h3>{title}</h3>
          <h1>{detail}</h1>
        </div>
        <div className="search">
          <input type="text" placeholder='Find your food' onChange={handleSearch} />
          <button><FaSearch size={23} className='icon' /></button>
        </div>
      </div>
      {category_template === 1 ?
        <div className="container">
          <div className={`item ${categoryActive === "all" ? 'active' : ''}`} ><a onClick={() => setCategoryActive(`all`)}>ทั้งหมด</a></div>
          {category.map((item: any , index) => (
            <div key={index} className={`item ${categoryActive === item ? 'active' : ''}`}>
              <a onClick={() => setCategoryActive(`${item}`)}>{item}</a>
            </div>
          ))}
        </div> :
        <div className="container2">
          <div className={`item2 ${categoryActive === "all" ? 'active' : ''}`} >
            <div className="img">
              <img src="https://cdn-icons-png.freepik.com/256/2276/2276931.png?ga=GA1.1.753019484.1708109519&semt=ais_hybrid" alt="" />
            </div>
            <a onClick={() => setCategoryActive(`all`)}>ทั้งหมด</a>
          </div>
          {category.map((item: any, index) => (
            <div className={`item2 ${categoryActive === item ? 'active' : ''}`} key={index}>
              <div className="img">
                <img src={category_image[index]} alt="" />
              </div>
              <a onClick={() => setCategoryActive(`${item}`)}>{item}</a>
            </div>
          ))}
        </div>}
      {loading ? <Loading/> :
        <div className='menus-ctn'>
          {filteredProducts.map((item: any) => (
            <Menu link={link} image={item.product_img} name={item.name} price={item.price} id={item.id} />
          ))}
        </div>
      }
    </div>
  )
}
export default Template3