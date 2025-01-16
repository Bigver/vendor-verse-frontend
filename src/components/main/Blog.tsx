import React from 'react'
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import { th } from 'date-fns/locale';
interface ContentProps {
  id: number,
  title: string,
  image: string,
  date: string
}

const Blog: React.FC<ContentProps> = ({ id, title, image ,date }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    // ฟอร์แมตเป็น วัน เดือน ปี และเวลา (ภาษาไทย)
    return format(date, 'dd MMMM yyyy HH:mm:ss', { locale: th });
  };
  return (
    <div className='card-blog'>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <h1>{title}</h1>
      <p>{formatDate(date)}</p>
      <Link to={`/blog/${id}`} className='link'>
        <button>ดูรายละเอียดเพิ่มเติม</button>
      </Link>
    </div>
  )
}

export default Blog