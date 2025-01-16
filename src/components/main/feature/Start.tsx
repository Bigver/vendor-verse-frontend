import { BsCircleFill } from "react-icons/bs";
import img1 from '../../../assets/feature/register.png'
import img2 from '../../../assets/feature/select-package.png'
import img3 from '../../../assets/feature/select-website.png'
import img4 from '../../../assets/feature/manage-website.png'

const Start = () => {
    return (
        <section>
            <div className="text-1">
                <h1>เริ่มต้นการใช้งาน</h1>
                <p>
                    ยินดีต้อนรับสู่ VendorVerse เว็บไซต์ที่ออกแบบมาเพื่อช่วยผู้ประกอบการสร้างธุรกิจออนไลน์ของตัวเองได้อย่างง่ายดายและรวดเร็ว! คุณสามารถสร้างเว็บไซต์ e-commerce ของคุณเองได้ในไม่กี่ขั้นตอน พร้อมทั้งเพิ่มสินค้าและออกแบบหน้าเพจตามที่คุณต้องการ                </p>
            </div>
            <div className="text-1">
                <h1>สมัครสมาชิก</h1>
                <p>
                 <BsCircleFill size={10} /> คลิกที่ปุ่ม "สมัครสมาชิก" บนหน้าแรก
                </p>
                <p>
                 <BsCircleFill size={10} /> กรอกข้อมูล เช่น ชื่อ, อีเมล, และรหัสผ่าน
                </p>
                <p>
                 <BsCircleFill size={10} /> ยืนยันการสมัครผ่านอีเมล
                </p>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="text-1">
                <h1>สมัคแพ็กเกจใช้งาน</h1>
                <p>
                 <BsCircleFill size={10} /> คลิกที่ปุ่ม "แพ็คเกจ" บนหน้าแรก
                </p>
                <p>
                 <BsCircleFill size={10} /> เลือกแพ็กเกจที่เหมาะสมสำหรับคุณ
                </p>
                <div className="img">
                    <img src={img2} alt="" />
                </div>
                <p>
                 <BsCircleFill size={10} /> ทำตามขั้นตอนการสมัครใช้งาน
                </p>
                <p>
                 <BsCircleFill size={10} /> เลือกเว็บไซต์ที่ต้องการใช้งาน
                </p>
                <div className="img">
                    <img src={img3} alt="" />
                </div>
                <p>
                 <BsCircleFill size={10} /> เมื่อทำตามขั้นตอนแล้้วสามารถเข้าสู่ระบบหลังบ้านและหน้าเว็บไซต์ได้ที่ คลิกที่รูป user และเลือก จัดการร้านค้า
                </p>
                <div className="img">
                    <img src={img4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Start