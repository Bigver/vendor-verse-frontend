import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";



interface ContentProps {
  category: string[];
  logo: string;
  link: string;
  color: string;
  background: string;
  cartLength: number;
  handleOnClick: () => void;
}



const Navbar3: React.FC<ContentProps> = ({ logo, category, link, color, background, handleOnClick, cartLength }) => {

  return (
    <div className="navbar-ctn-3" style={{ background: background }}>
      <div className="content1">
        <div className="logo">
          {logo ?
            <Link to={`/store/${link}/homepage`} className="link">
              <img src={logo} alt="" />
            </Link> :
            <Link to={`/store/${link}/homepage`} className="link">
              <h2 style={{ color: color }}>LOGO</h2>
            </Link>}
        </div>
        <div className="link">
          <ul>
            {category.slice(0, 4).map((item, index) => (
              <li key={index}>
                <a
                  href={`/store/${link}/products/${item}`}
                  style={{ color: color }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cart">
        <a onClick={handleOnClick}>
          <CiDeliveryTruck size={32} color={color} />
        </a>
        <a href={`/store/${link}/cart`}>
          <CiShoppingCart size={30} color={color} />
          <span>{cartLength}</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar3;
