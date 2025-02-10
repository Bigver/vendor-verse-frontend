
import { useState, useEffect } from 'react'
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../components/main/Loading';
import Navbar from '../../components/shopingStore/Navbar/Navbar';
import Footer from '../../components/shopingStore/Footer/Footer';
import Section1 from '../../components/shopingStore/Homepage/Section1/Section1';
import Section2 from '../../components/shopingStore/Homepage/Section2/Section2';
import Section3 from '../../components/shopingStore/Homepage/Section3/Section3';
import Section4 from '../../components/shopingStore/Homepage/Section4/Section4';
import Section5 from '../../components/shopingStore/Homepage/Section5/Section5';
import Section6 from '../../components/shopingStore/Homepage/Section6/Section6';

const HomePage = () => {
  const [data, setData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const params = useParams();
  const [pageData, setPageData] = useState(() => {
    const savedData = localStorage.getItem("pageData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    // บันทึก cartItems ลง localStorage ทุกครั้งที่มีการเปลี่ยนแปลง
    localStorage.setItem("pageData", JSON.stringify(pageData));
  }, [pageData]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/store/page/${params.nameStore}`);
        setData(response.data)
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
    <div>
      {loading ? <Loading/> :
        <div style={{ fontFamily: data.font }}>
          <Navbar logo={data.navbar.logo} category={data.category} link={data.name_store} color={data.navbar.text_color} template={data.navbar.template} background={data.navbar.background_color} />
          <Section1 template={data.section1.template} color={data.section1.text_color} background={data.section1.background_color} image={data.section1.image} title={data.section1.title} detail={data.section1.detail} link={data.name_store} />
          {data.section2.use_section === 'yes' ?
            <Section2 store_id={data.store_id} link={data.name_store} color={data.section2.text_color} background={data.section2.background_color} template={data.section2.template} /> : ""}
          {data.section3.use_section === 'yes' ?
            <Section3 template={data.section3.template} image={data.section3.image} title={data.section3.title} detail={data.section3.detail} link={data.name_store} color={data.section3.text_color} background={data.section3.background_color} /> : ""}
          {data.section4.use_section === 'yes' ?
            <Section4 template={data.section4.template} link={data.name_store} category={data.category} color={data.section4.text_color} background={data.section4.background_color} image={data.section4.image} /> : ""}
          {data.section5.use_section === 'yes' ?
            <Section5 template={data.section5.template} image={data.section5.image} title={data.section5.title} detail={data.section5.detail} link={data.name_store} color={data.section5.text_color} background={data.section5.background_color} /> : ""}
          {data.section6.use_section === 'yes' ? 
            <Section6 store_id={data.store_id} template={data.section6.template} image={data.section6.image} title={data.section6.title} detail={data.section6.detail} link={data.name_store} color={data.section6.text_color} background={data.section6.background_color} link_contact={[data.section6.link_facebook, data.section6.link_instragram, data.section6.link_line , data.section6.email , data.section6.phone , data.section6.address]} /> : ""}
          <Footer logo={data.navbar.logo} category={data.category} link={data.name_store} link_contact={[data.section6.link_facebook, data.section6.link_instragram, data.section6.link_line]} detail={data.footer.detail_footer} template={data.footer.template} color={data.footer.text_color} background={data.footer.background_color} />
        </div>
      }
    </div>
  )
}

export default HomePage