import { Link } from "react-router-dom";

const Content_3 = () => {
    return (
        <div className="feature-1" style={{ height: "100vh" }}>
            <div className="text">
                <h2>เริ่มต้นใช้งานทันที</h2>
                <h3>ใช้เวลาเพียงไม่กี่นาที</h3>
                <p> สมัครสมาชิกวันนี้และสร้างหน้าเพจธุรกิจของคุณเองในไม่กี่นาที แล้วมาร่วมเติบโตไปกับเราใน VendorVerse</p>
                <Link to={"/feature"}>
                    <button>ดูรายละเอียด</button>
                </Link>
            </div>
            <div className="img">
                <img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736766978/fornt-end-vendorverse/content3.3_t6n9i9.png" alt="" />
            </div>
        </div>
    )
}

export default Content_3