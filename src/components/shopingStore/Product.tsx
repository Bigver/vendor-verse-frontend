import React from 'react'
import { Link } from "react-router-dom";
interface ContentProps {
  link: string,
  id: number,
  name: string,
  product_img: string[],
  price: number;
  stock: number;
  color : string
}
const Product: React.FC<ContentProps> = ({ link, id, name, product_img, price, stock , color }) => {
  return (
    <Link to={`/store/${link}/products/product/${id}`} className='link'>
      <div className="card" style={{color : color}}>
        <div className="img"><img src={product_img[0]} alt="" /></div>
        <div className="text">
          <h1>{name}</h1>
          <div className="text-1">
            <p>฿{price}</p>
          </div>
        </div>
        {/* <div className="icon">         
             <LuShoppingCart size={20} color='white' />
          </div> */}
        {
          stock <= 0 ? 
          <div className="out-stock">
            <h1>สินค้าหมด</h1>
          </div>
            : ""
        }

      </div>
    </Link>
  )
}

export default Product