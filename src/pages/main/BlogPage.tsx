import { useEffect, useState } from 'react'
import Navbar from '../../components/main/Navbar'
import Footer from '../../components/main/Footer'
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import { useParams } from 'react-router-dom';
import Loading from '../../components/main/Loading';

const BlogPage = () => {
  const [data, setData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/blogs/findId/${params.id}`); // URL ของ API ที่เราสร้างไว้
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError('Failed to fetch Data');
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar nav={'navbar-ctn'} />
      <div className="blog-ctn">
        {loading ? <Loading/> :
          <div className="content">
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="img">
              <img src={data.image} alt="" />
            </div>
            <div className="text">
              <h1>{data.title}</h1>
              <p>{data.detail}</p>
            </div>
          </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default BlogPage