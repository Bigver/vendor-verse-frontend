import img1 from '../../../assets/feature/manage-website-restaurant.png'
import img2 from '../../../assets/feature/login-admin.png'
import img3 from '../../../assets/feature/manage-restaurant.png'
import img4 from '../../../assets/feature/dashboard-reataurant.png'
import img5 from '../../../assets/feature/slidebar-restaurant.png'
import img6 from '../../../assets/feature/add-menu.png'
import img7 from '../../../assets/feature/menu-list.png'
import img8 from '../../../assets/feature/order-restaurant.png'
import img9 from '../../../assets/feature/menu-list-front.png'
import img10 from '../../../assets/feature/edit-page-restaurant.png'
import ReactPlayer from "react-player";

import { BsCircleFill } from "react-icons/bs";

const RestaurantFeature = () => {
    return (
        <section id="store">
            <div className="text-1" id="feature-restaurant-start">
                <h1>เริ่มต้นการใช้งานเว็บไซต์ร้านอาหารออนไลน์</h1>
                <div className="vdo">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        controls
                        width="100%"
                        height="300px"
                        className="vdo-clip"
                    />
                </div>
                <p>เมื่อสมัครใช้งานแพ็กเกจเสร็จสิ้น เราสามารถจัดการเว็บไซต์ร้านอาหาร และ เข้าสู่หน้าเว็บไซต์ได้ที่หน้าจัดการเว็บไซต์</p>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <h1>ขั้นตอนการใช้งาน</h1>
                <p><BsCircleFill size={10} /> กรอก email และ รหัสผ่านเพื่อเข้าสู่หน้าจัดการเว็บไซต์</p>
                <div className="img">
                    <img src={img2} alt="" />
                </div>
                <p><BsCircleFill size={10} /> เมื่อเข้าสู่ระบบหลังแล้ว คลิกจัดการร้านเพื่อเข้าสู่ระบบหลังบ้าน คลิกเข้าสู่หน้าเว็บไซต์เพื่อดูหน้าหน้าเว็บไซต์</p>
                <div className="img">
                    <img src={img3} alt="" />
                </div>
                <h1>หน้า Dashboard สำหรับดูรายงานยอดขาย</h1>
                <div className="img">
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className="text-1" id="feature-restaurant-add-menu">
                <h1>การเพิ่มเมนู</h1>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Restaurant คลิกไปที่ Add Menu</p>
                <div className="img">
                    <img src={img5} alt="" />
                </div>
                <p><BsCircleFill size={10} /> หน้าสำหรับเพิ่มเมนูอาหาร สามารถเพิ่ม topping หรือ size ของอาหารได้</p>
                <div className="img">
                    <img src={img6} alt="" />
                </div>
            </div>
            <div className="text-1" id="feature-restaurant-update-menu">
                <h1>การอัพเดทเมนู</h1>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Restaurant คลิกไปที่ Menu List</p>
                <div className="img">
                    <img src={img7} alt="" />
                </div>
                <p><BsCircleFill size={10} /> สามารถอัพเดทเมนู ลบ และ เมื่อสินค้าหมดสามารถปิดไม่ให้โชว์อาหารได้</p>
            </div>
            <div className="text-1" id="feature-restaurant-order">
                <h1>รายการสั่งซื้ออาหาร</h1>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Restaurant คลิกไปที่ Order List</p>
                <div className="img">
                    <img src={img8} alt="" />
                </div>
                <p><BsCircleFill size={10} /> สามารถดูรายการสั่งซื้อ ลบ และ อัพเดทสถานะการชำระเงินได้</p>
                <div className="img">
                    <img src={img9} alt="" style={{ height: '400px' }} />
                </div>
                <p><BsCircleFill size={10} /> เมื่ออัพเดทสถานะการชำระเงินแล้วรายการสั่งซื้อหน้าเว็บไซต์จะหายไป</p>
            </div>
            <div className="text-1" id="feature-restaurant-edit-page">
                <h1>การแก้ไขหน้าเว็บไซต์</h1>
                <p><BsCircleFill size={10} /> คลิกตรงแถบและเลือก Edit Page Restaurant</p>
                <div className="img">
                    <img src={img10} alt="" />
                </div>
                <p><BsCircleFill size={10} /> ในหน้านี้สามารถเลือกแบบ template ของหน้าร้านได้ สามารถเลือก theme และ แก้ไขส่วนต่างๆของเว็บได้</p>
                <p><BsCircleFill size={10} /> เมื่อเราสมัครเข้ามาเราจะเปลี่ยน catagory เพราะ เมื่อเราเพิ่มหรือแก้ไขเมนูเราจะสามารถเลือก category จากที่เราเพิ่มไป</p>
                <p><BsCircleFill size={10} /> ในหน้านี้เราสามารถแก้ไขหน้าเว็บไซต์ได้ รวมไปถึงการเปลี่ยนcategory ใช้สำหรับการเพิ่มสินค้า เพราะต้องใช้ category ในการบอกหมวดหมู่</p>
                <p><BsCircleFill size={10} /> เลือก template ได้ และสามารถดูตัวอย่างได้</p>
            </div>

        </section>
    )
}

export default RestaurantFeature