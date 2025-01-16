import React, { useState, useEffect } from 'react'
import Menu from '../Menu';
import { requestMethod } from "../../../requestMethod";
import axios from 'axios';
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

interface ContentProps {
  link: string;
  store_id: number;
  category: string[];
  image: string[];
  category_template : number;
  category_image : string[];
}


const Template1: React.FC<ContentProps> = ({ link, store_id, category, image , category_template , category_image }) => {
  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const [categoryActive, setCategoryActive] = useState('all'); // สถานะสำหรับตรวจสอบการโหลด
  const [slideImage, setSlideImage] = useState(0)

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

  const handleSlide = (n: any) => {
    const count = slideImage + n
    if (count < 0) {
      setSlideImage(0)
    } else if (count === image.length) {
      setSlideImage(0)
    } else {
      setSlideImage(slideImage + n)
    }
  }

  return (
    <div className='home-ctn-4' style={{ paddingBottom: '50px' }}>
      <div className="show-image">
        <button onClick={() => handleSlide(-1)}><GoChevronLeft size={30} className='icon'/></button>
        <img src={image[slideImage]} alt="" />
        <button onClick={() => handleSlide(+1)}><GoChevronRight size={30} className='icon'/></button>
      </div>
      { category_template === 1 ?
        <div className="container">
          <div className={`item ${categoryActive === "all" ? 'active' : ''}`} ><a onClick={() => setCategoryActive(`all`)}>ทั้งหมด</a></div>
          {category.map((item: any) => (
            <div className={`item ${categoryActive === item ? 'active' : ''}`}>
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
          {category.map((item: any , index) => (
            <div className={`item2 ${categoryActive === item ? 'active' : ''}`}>
              <div className="img">
                <img src={category_image[index]} alt="" />
              </div>
              <a onClick={() => setCategoryActive(`${item}`)}>{item}</a>
            </div>
          ))}
        </div>}
      {loading ? "LOADING" :
        <div className='menus-ctn'>
          {productData.map((item: any) => (
            <Menu link={link} image={item.product_img} name={item.name} price={item.price} id={item.id} />
          ))}
        </div>
      }
    </div>
  )
}

export default Template1