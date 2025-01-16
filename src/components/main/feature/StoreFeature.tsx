import { BsCircleFill } from "react-icons/bs";
import img1 from '../../../assets/feature/login-admin.png'
import img2 from '../../../assets/feature/manage-admin.png'
import img3 from '../../../assets/feature/admin-dashboard.png'
import img4 from '../../../assets/feature/add-product.png'
import img5 from '../../../assets/feature/add-product2.png'
import img6 from '../../../assets/feature/product-list.png'
import img7 from '../../../assets/feature/order-store.png'
import img8 from '../../../assets/feature/message-store.png'
import img9 from '../../../assets/feature/message-frontend.png'
import img10 from '../../../assets/feature/section-store.png'
import img11 from '../../../assets/feature/edit-page-store.png'
import img12 from '../../../assets/feature/edit-page-store1.png'

import ReactPlayer from "react-player";

const StoreFeature = () => {
    return (
        <section id="store">
            <div className="text-1" id="feature-store">
                <h1>เริ่มต้นการใช้งานเว็บไซต์ร้านค้าออนไลน์</h1>
                <div className="vdo">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        controls
                        width="100%"
                        height="300px"
                        className="vdo-clip"
                    />
                </div>
                <p>เมื่อสมัครการใช้งานแพ็กเกจเสร็จสิ้น เราสามารถจัดการเว็บไซต์ร้านค้า และ เข้าสู่หน้าเว็บไซต์ได้ที่หน้าจัดการเว็บไซต์</p>
            </div>
            <div className="text-1" >
                <h1>ขั้นตอนการใช้งาน</h1>
                <p><BsCircleFill size={10} /> กรอก email และ รหัสผ่านเพื่อเข้าสู่หน้าจัดการเว็บไซต์</p>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <p><BsCircleFill size={10} /> เมื่อเข้าสู่ระบบหลังแล้ว คลิกจัดการร้านค้าเพื่อเข้าสู่ระบบหลังบ้าน คลิกเข้าสู่หน้าเว็บไซต์เพื่อดูหน้าหน้าเว็บไซต์</p>
                <div className="img">
                    <img src={img2} alt="" />
                </div>
                <h1>หน้า Dashboard สำหรับดูรายงานยอดขาย</h1>
                <div className="img">
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="text-1" id="feature-store-add-product">
                <h1>เพิ่มสินค้าหน้าเว็บไซต์</h1>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Store คลิกไปที่ Add Product</p>
                <div className="img">
                    <img src={img4} alt="" />
                </div>
                <p><BsCircleFill size={10} /> กรอกข้อมูลสินค้า</p>
                <div className="img">
                    <img src={img5} alt="" />
                </div>

            </div>
            <div className="text-1" id="feature-store-update-product">
                <h1>อัพเดทสินค้า</h1>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Store คลิกไปที่ Product List</p>
                <div className="img">
                    <img src={img6} alt="" />
                </div>
                <p><BsCircleFill size={10} /> สามารถลบ และ อัพเดทสินค้าได้หน้านี้</p>

            </div>
            <div className="text-1" id="feature-store-order">
                <h1>รายการสั่งซื้อ</h1>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Store คลิกไปที่ Order List</p>
                <div className="img">
                    <img src={img7} alt="" />
                </div>
                <p><BsCircleFill size={10} /> สามารถดู Detail ของลูกค้า  Detail การสั่งซื้อ อัพเดทสถานะการจัดส่ง และ อัพเดทสถานะการชำระเงินได้จากหน้านี้</p>

            </div>
            <div className="text-1" id="feature-store-message">
                <h1>ข้อความติดต่อจากหน้าเว็บไซต์</h1>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Store คลิกไปที่ Message</p>
                <div className="img">
                    <img src={img8} alt="" />
                </div>
                <p><BsCircleFill size={10} /> สามารถดูข้อความที่ส่งมาจากหน้าเว็บไซต์ได้</p>
                <div className="img">
                    <img src={img9} alt="" />
                </div>
                <p><BsCircleFill size={10} /> หน้าเว็บไซต์ตัวอย่างที่ลูกค้าส่งข้อความเข้ามา</p>
            </div>
            <div className="text-1" id="feature-store-edit-page">
                <h1>การแก้ไขหน้าเว็บไซต์</h1>
                <p><BsCircleFill size={10} /> เริ่มแรกเราจะมาดู section แต่ละ section ว่า section นั้นเกี่ยวกับอะไร</p>
                <div className="img">
                    <img src={img10} alt="" />
                </div>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Edit Page Store</p>
                <div className="img">
                    <img src={img11} alt="" />
                </div>
                <p><BsCircleFill size={10} /> ในหน้านี้เราสามารถแก้ไขหน้าเว็บไซต์ได้ รวมไปถึงการเปลี่ยน font เปลี่ยน category ใช้สำหรับการเพิ่มสินค้า เพราะต้องใช้ category ในการบอกหมวดหมู่</p>
                <h1>วิธีการเปลี่ยนหน้าเว็บไซต์</h1>
                <p><BsCircleFill size={10} /> เลือก section ที่ต้องการ</p>
                <p><BsCircleFill size={10} /> แต่ละ section ข้อมูลที่ใส่จะต่างกันออกไป</p>
                <p><BsCircleFill size={10} /> เราสามารถเปลี่ยนสี font และ background พื้นหลังหรือปุ่มได้</p>
                <p><BsCircleFill size={10} /> สามารถเลือก template ได้ และสามารถดูตัวอย่างได้</p>
                <div className="img">
                    <img src={img12} alt="" />
                </div>
            </div>
        </section>
    )
}

export default StoreFeature