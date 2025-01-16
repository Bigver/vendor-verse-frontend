import { Link } from "react-router-dom";

const Content1 = () => {
  return (
    <div>
      <div className="text">
        <h1>ยินดีต้อนรับสู่ VendorVerse - เริ่มต้นสร้างเว็บไซต์ของคุณ</h1>
        <p>
          เริ่มต้นธุรกิจของคุณได้ทันที
          สร้างร้านค้าออนไลน์ของคุณได้อย่างง่ายดาย พร้อมระบบการจัดการสินค้าที่ทรงพลัง และฟีเจอร์สำหรับสร้างร้านค้าที่ครบครัน
        </p>
        <Link to={"/package"}>
          <button>เริ่มต้นใช้งานฟรี</button>
        </Link>
      </div>
      <div className="img" data-aos="zoom-in" data-aos-duration="1000">
        <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736766979/fornt-end-vendorverse/hero_txf3f7.png" alt="" />
      </div>
    </div>
  )
}

export default Content1