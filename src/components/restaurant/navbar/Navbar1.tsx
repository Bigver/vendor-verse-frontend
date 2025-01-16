import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import bil from '../../../assets/bill.png'
interface ContentProps {
    logo: string;
    link: string;
    table_id : string
  }
  

const Navbar1 : React.FC<ContentProps> = ({ logo, link , table_id }) => {
  return (
    <div className='navbar-restaurant-1'>
      
    {logo === "" ?
      <Link to={`/restaurant/${link}/homepage/${table_id}`}><IoChevronBackSharp size={30} color='black' style={{ marginLeft: '10px' }} /></Link>
      : <Link to={`/restaurant/${link}/homepage/${table_id}`}>
        <div className="logo"><img src={logo} alt="" /></div>
      </Link>}

    <div className="cart-ctn">
      <div className='cart'>
        <Link to={`/restaurant/${link}/checkout`}>
          <a ><img src={bil} alt="" style={{ width: '26px', marginBottom: '3px', marginRight: '15px' }} /></a>
        </Link>
        <Link to={`/restaurant/${link}/cart`}>
          <a ><CiShoppingCart size={32} /><span>1</span></a>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Navbar1