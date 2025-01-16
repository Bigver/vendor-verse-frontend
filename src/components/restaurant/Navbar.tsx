import React from 'react'
import Navbar2 from './navbar/Navbar2';
interface ContentProps {
  link: string;
  active: string;
}

const Navbar: React.FC<ContentProps> = ({ link , active }) => {
  const table_id = localStorage.getItem("table_id");
  return (
    <div>
      <Navbar2 link={link} table_id={String(table_id)} active={active} />
    </div>
    
  )
}

export default Navbar