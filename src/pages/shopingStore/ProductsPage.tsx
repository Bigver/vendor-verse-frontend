import Product from '../../components/shopingStore/Product';
import Navbar from '../../components/shopingStore/Navbar/Navbar';
import React, { useState, useEffect } from 'react'
import Footer from '../../components/shopingStore/Footer/Footer';
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import Loading from "../../components/main/Loading";

const ProductsPage = () => {
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)
  const params = useParams();
  
  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [category, setCategory] = useState(params.category); 

  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: Number(value),
    }));
  };


  const filteredProducts = productData.filter(
    (product: any) =>
      product.price >= priceRange.min &&  // เงื่อนไขกรองตามราคาขั้นต่ำ
      product.price <= priceRange.max &&  // เงื่อนไขกรองตามราคาสูงสุด
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) // เงื่อนไขกรองตามชื่อสินค้า
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${requestMethod}/store/product/find/product/${data.store_id}/${category}`);
        setProductData(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error)
        // setError('Failed to fetch Products');
      }
    };
    fetchProducts();
  }, [category]);

  const [filterShow, setFilterShow] = useState(false)
  return (
    <div>
      <Navbar logo={data.navbar.logo} category={data.category} link={data.name_store} color={data.navbar.text_color} template={data.navbar.template} background={data.navbar.background_color} />
      <div className='products-ctn'>
        <div className="filter-ctn-1">
          <div className="icon">
            <a onClick={() => setFilterShow(!filterShow)} style={{ color: data.text_color, borderColor: data.text_color }}><VscSettings color={data.text_color} size={25} />FILTER</a>
          </div>
          <div>

          </div>
          <div className={`filter ${filterShow ? "show" : ""}`}>
            <div className="off">
              <a onClick={() => setFilterShow(!filterShow)}>X</a>
            </div>
            <div className="search-ctn">
              <h1>Search Products</h1>
              <div className="search-bar">
                <input type="text" placeholder="ค้นหาสินค้า" onChange={handleSearch} />
                <label htmlFor=""><IoSearchOutline size={18} /></label>
              </div>
            </div>
            <div className="category-ctn">
              <h1>Products Category</h1>
              <div className="category">
                <div className={`item ${category === "all" ? 'active' : ''}`} ><a onClick={() => setCategory(`all`)}>- All Product</a></div>
                {data.category.map((item: any) => (
                  <div className={`item ${category === item ? 'active' : ''}`}>
                    <a onClick={() => setCategory(`${item}`)}>- {item}</a>
                  </div>
                ))}
              </div>
              <div className="filter-price">
                <h1>Filter by Price</h1>
                <div className="price">
                  <label>Min Price: {priceRange.min}</label>
                  <input
                    type="range"
                    name="min"
                    min="0"
                    max="2000"
                    value={priceRange.min}
                    onChange={handlePriceChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product" style={{paddingBottom : '50px'}}>
          {loading ? <Loading /> :
            <>
              {filteredProducts.map((item: any) => (
                <div key={item.id}>
                  <Product link={data.name_store} id={item.id} name={item.name} product_img={item.product_img} price={item.price} stock={item.stock} color={data.text_color} />
                </div>
              ))}
            </>}
        </div>
        <Footer logo={data.navbar.logo} category={data.category} link={data.name_store} link_contact={[data.section6.link_facebook, data.section6.link_instragram, data.section6.link_line]} detail={data.footer.detail_footer} template={data.footer.template} color={data.footer.text_color} background={data.footer.background_color} />
        </div>
    </div>
  )
}

export default ProductsPage