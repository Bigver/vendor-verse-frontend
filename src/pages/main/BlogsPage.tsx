import { useEffect, useState } from 'react'
import Navbar from '../../components/main/Navbar'
import Footer from '../../components/main/Footer'
import Blog from '../../components/main/Blog'
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import Loading from '../../components/main/Loading';

const BlogsPage = () => {
    const [data, setData]: any[] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
    // const [page, setPage] = useState<number>(1); // หน้าปัจจุบัน
    // const [perPage] = useState<number>(20); // จำนวนรายการต่อหน้า
    // const [totalPages, setTotalPages] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${requestMethod}/blogs/find`); // URL ของ API ที่เราสร้างไว้
                setData(response.data.blogs)
                // setTotalPages(response.data.totalPages);
                setLoading(false)
            } catch (error) {
                setError('Failed to fetch Data');
            }
        };
        fetchData();
    }, []);
    
//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

    return (
        <div>
            <Navbar nav="navbar-ctn" />
            <div className='blogs-ctn'>
                {loading ? <Loading/> :
                    <div className='card-blog-ctn'>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {data.map((item: any) => (
                            <Blog key={item.id} title={item.title} id={item.id} image={item.image} date={item.createdAt} />
                        ))}
                    </div>
                }
                {/* <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                /> */}
            </div>
            <Footer />
        </div>
    )
}

export default BlogsPage