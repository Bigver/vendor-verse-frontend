import  { useState } from "react";
import Navbar from '../../components/shopingStore/Navbar/Navbar'
import Swal from 'sweetalert2'
import Footer from '../../components/shopingStore/Footer/Footer'
import axios from "axios";
import { requestMethod } from "../../requestMethod";
import { toast } from 'react-toastify';

const Information = () => {
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)

  const savedCart = localStorage.getItem("cartItemsStore");
  const cartItems = savedCart ? JSON.parse(savedCart) : [];

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    address: '',
    slip: null
  });

  const [image, setImage] = useState('');

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };


  const checkOut = async (e: any) => {
    e.preventDefault();
    const total = cartItems
      .reduce(
        (total: any, item: any) => total + item.quantity * item.price,
        0
      )
      .toFixed(2);
    const newArray = cartItems.map((item: any) => ({
      id: item.id,
      img: item.image,
      name: item.name,
      price: item.price * item.quantity,
      quantity: item.quantity,
      option1: item.option1,
      option2: item.option2,
    }));
    try {
      const response = await axios.post(`${requestMethod}/store/order/create`, {
        store_id: data.store_id,
        item_detail: newArray,
        user_detail: formData,
        price: total,
        payment_img: image,
        package_id: data.storeOwner.package_id
      });
      if (response.status === 201) {
        localStorage.removeItem("cartItemsStore");
        Swal.fire({
          title: "ทำการสั่งซื้อเรียบร้อย!",
          text: "คลิก OK เพื่อดูหมายเลข order!",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "ใช้ id นี้เพื่อค้นหาสินค้า",
              html: `order id : ${(response.data.id).toString()}`,
              icon: "info",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = `/store/${data.name_store}/homepage`
              }
            });
          }
        });
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        text: 'Error placing order',
        icon: "error",
      })
    }
  }

  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      const { data } = await axios.post(`${requestMethod}/uploadFile`,
        bodyFormData,
      );
      setImage(data.secure_url);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Image uploaded fail');
    }
  };

  return (
    <div style={{ fontFamily: data.font }}>
      <Navbar logo={data.navbar.logo} category={data.category} link={data.name_store} color={data.navbar.text_color} template={data.navbar.template} background={data.navbar.background_color} />
      <div className="information-ctn" style={{marginBottom : '150px' , marginTop : '150px'}}>
        <form onSubmit={checkOut}>
          <h1>กรอกข้อมูลเพื่อทำการจัดส่งสินค้า</h1>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="fullName">ชื่อ-นามสกุล</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">เบอร์โทร</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">ที่อยู่ในการจัดส่ง</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="slip">สลิปการโอนเงิน</label>
          <input
            type="file"
            onChange={(e) => uploadFileHandler(e)}
            required
          />

          <button type="submit">สั่งซื้อ</button>
        </form>
      </div>
      <Footer logo={data.navbar.logo} category={data.category} link={data.name_store} link_contact={[data.section6.link_facebook, data.section6.link_instragram, data.section6.link_line]} detail={data.footer.detail_footer} template={data.footer.template} color={data.footer.text_color} background={data.footer.background_color} />
      </div>
  )
}

export default Information