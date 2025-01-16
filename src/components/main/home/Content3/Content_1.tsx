import { Link } from "react-router-dom";

const Content_1 = () => {
    return (
        <div className="feature-1" style={{ height: "100vh" }}>
            <div className="text">
                <h2>ใช้งานสะดวก</h2>
                <h3>eCommerce ที่ครบวงจร</h3>
                <p>สร้างและจัดการร้านค้าออนไลน์ของคุณได้ง่ายด้วยเครื่องมือที่ใช้งานง่าย ปรับแต่งหน้าร้าน จัดการสต็อกสินค้า ประมวลผลการชำระเงิน และติดตามคำสั่งซื้อในที่เดียว</p>
                <Link to={"/feature"}>
                    <button>ดูรายละเอียด</button>
                </Link>
            </div>
            <div className="img">
                <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736766978/fornt-end-vendorverse/content3.2_ast7ex.png" alt="" />
            </div>
        </div>
    )
}

export default Content_1