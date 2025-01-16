import { Link } from "react-router-dom";

const Content_2 = () => {
  return (
    <div className="feature-1" style={{ height: "100vh" }}>
      <div className="img-1">
        <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736767674/fornt-end-vendorverse/admin_gciiip.png" alt="" />
      </div>
      <div className="text">
        <h2>รายงานยอดขาย</h2>
        <h3>มีระบบหลังบ้านที่ครอบคลุม</h3>
        <p>จัดการร้านของคุณได้อย่างมีประสิทธิภาพด้วยระบบการจัดการสินค้า การรับออเดอร์ การชำระเงินที่สะดวกสบาย การอัพเดทหน้าเว็บ สินค้าได้ตลอด</p>
        <Link to={"/feature"}>
          <button>ดูรายละเอียด</button>
        </Link>
      </div>
      <div className="img-2">
        <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736767674/fornt-end-vendorverse/admin_gciiip.png" alt="" />
      </div>
    </div>
  )
}

export default Content_2