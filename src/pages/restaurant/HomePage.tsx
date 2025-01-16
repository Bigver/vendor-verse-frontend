import { useState, useEffect } from 'react'
import Navbar from '../../components/restaurant/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import Swal from 'sweetalert2';
import Loading from '../../components/main/Loading';
import Template from '../../components/restaurant/Template';

const HomePage = () => {
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const params = useParams();


  const [pageData, setPageData] = useState(() => {
    const savedData = localStorage.getItem("pageData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("pageData", JSON.stringify(pageData));
  }, [pageData]);


  useEffect(() => {
    localStorage.setItem('table_id', String(params.table_id)); // เก็บ token ใน local storage
  }, [params.table_id]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/restaurant/page/${params.nameStore}`); // URL ของ API ที่เราสร้างไว้
        setPageData(response.data)
        setLoading(false)
      } catch (error) {
        Swal.fire({
          text: 'package หมดอายุ หรือเกิดข้อผิดพลาด',
          icon: "error",
        })   
      }
    };
    fetchData();
  }, []);
  return (
    <div className={`body-restaurant ${pageData.theme}`}>
      {loading ? <Loading/> :
        <div className='resturant-shop'>
         <Navbar link={pageData.name_store} active={'homepage'}/>
         <Template template={pageData.template}  link={pageData.name_store} title={pageData.title} detail={pageData.detail} store_id={pageData.store_id} category={pageData.category} image={pageData.image} category_template={pageData.category_template} category_image={pageData.category_image} />
        </div>}
    </div>

  )
}

export default HomePage