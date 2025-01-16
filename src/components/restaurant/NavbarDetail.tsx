import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
interface ContentProps {
  link: string;
  table_id: string
}


const NavbarDetail: React.FC<ContentProps> = ({ link, table_id }) => {
  const cartItem: any= localStorage.getItem("cartItemsResturant");
  const cart = JSON.parse(cartItem)
  return (
    <div className='navbar-restaurant-1'>
      <Link to={`/restaurant/${link}/homepage/${table_id}`}><IoChevronBackSharp size={30} className='icon' style={{ marginLeft: '10px' }} /></Link>
      <div className="cart-ctn">
        <div className='cart'>
          <Link to={`/restaurant/${link}/cart`}>
            <a ><CiShoppingCart size={32} className='icon'/><span>{cart?.length}</span></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarDetail