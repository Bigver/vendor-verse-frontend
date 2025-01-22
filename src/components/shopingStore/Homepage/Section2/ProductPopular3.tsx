import React from 'react'
import { Link } from "react-router-dom";
interface ContentProps {
  product: string[];
  link: string;
  color: string;
}
const ProductPopular3: React.FC<ContentProps> = ({ link, product, color }) => {
  return (
    <div className="popular-3">
      {product.length === 0 ? <div style={{ marginTop: '150px' }}><h2>ยังไม่มีสินค้าในขณะนี้</h2></div> :
        <>
          {product.slice(0, 20).map((item: any) => (
            <div key={item.id}>
              <div key={item.id}>
                <Link to={`/store/${link}/products/product/${item.id}`} className='link'>
                  <div className="card" >
                    <div className="img"><img src={item.product_img[0]} alt="" /></div>
                    <div className="text-2" style={{ color: color }}>
                      <h3 >{item.name}</h3>
                      <div className="text-1">
                        <p >฿{item.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </>
      }
    </div>
  )
}

export default ProductPopular3