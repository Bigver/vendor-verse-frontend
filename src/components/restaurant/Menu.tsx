import React from 'react'
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

interface ContentProps {
  link: string;
  image: string[];
  name: string;
  price: number;
  id: number;
}

const Menu: React.FC<ContentProps> = ({ link, image, name, price, id }) => {
  return (
    <Link to={`/restaurant/${link}/product/${id}`} className='link'>
      <div className='menu-card' key={id}>
        <div className="img"><img src={image[0]} alt="" /></div>
        <div className="text">
          <h1>{name}</h1>
          <div className='plus'>
            <p>฿ {price}</p>
            <AiFillPlusCircle size={25} className='icon'/>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Menu