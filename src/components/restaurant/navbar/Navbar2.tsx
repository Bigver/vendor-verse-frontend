import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
interface ContentProps {
    link: string;
    table_id: string;
    active: string;
}


const Navbar2: React.FC<ContentProps> = ({link, table_id, active }) => {
    return (
        <div>
            <div className='navbar-restaurant-2'>
                <Link to={`/restaurant/${link}/homepage/${table_id}`} className='link'>
                    <div className={active === 'homepage' ? "active" : "list"}>
                        <div className="logo"><CiShop size={32} /></div>
                        <p>SHOP</p>
                    </div>
                </Link>
                <Link to={`/restaurant/${link}/menus2/${table_id}`} className='link'>
                    <div className={active === 'search' ? "active" : "list"}>
                        <div className="logo"><CiSearch size={32} /></div>
                        <p>SEARCH</p>
                    </div>
                </Link>
                <Link to={`/restaurant/${link}/checkout`} className='link'>
                    <div className={active === 'bill' ? "active" : "list"}>
                        <a ><CiViewList size={32} /></a>
                        <p>BILL</p>
                    </div>
                </Link>
                <Link to={`/restaurant/${link}/cart`} className='link'>
                    <div className={active === 'cart' ? "active" : "list"}>
                        <a ><CiShoppingCart size={32} /></a>
                        <p style={{ marginLeft: '4px' }}>CART</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar2