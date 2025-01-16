import { useState, useEffect } from 'react'
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Menu from '../../components/restaurant/Menu';
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from '../../components/restaurant/Navbar';
import Loading from '../../components/main/Loading';

const MenusPage2 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event: any) => {
        setSearchTerm(event.target.value);
    };
    const params = useParams();
    const pageData: any = localStorage.getItem('pageData');
    const data = JSON.parse(pageData)
    const [productData, setProductData]: any[] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
    const filteredProduct: any = productData.filter((product: any) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${requestMethod}/restaurant/menu/find/menu/${data.store_id}/all`);
                setProductData(response.data);
                setLoading(false)
            } catch (error) {
                console.log(error)
                // setError('Failed to fetch Products');
            }
        };
        fetchProducts();
    }, []);
    const table_id = localStorage.getItem("table_id");

    return (
        <div className={`body-restaurant ${data.theme}`} >
            <Navbar link={data.name_store} active={'search'} />
            <div className='search-ctn'>
                <div className="search">
                    <Link to={`/restaurant/${String(params.nameStore)}/homepage/${table_id}`}><IoChevronBackSharp size={30} className='icon' style={{ marginLeft: '10px' }} /></Link>
                    <input type="text" placeholder='ค้นหาเมนู' value={searchTerm}
                        onChange={handleSearch} />
                </div>
                {loading ? <Loading/> :
                    <div className='menus-ctn'>
                        {filteredProduct.map((item: any) => (
                            <Menu id={item.id} link={String(params.nameStore)} image={item.product_img} name={item.name} price={item.price} />
                        ))}
                    </div>
                }
            </div>
        </div>

    )
}

export default MenusPage2