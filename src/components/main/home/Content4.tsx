import { IoStorefrontOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Content4 = () => {
  return (
    <section className='content-4'>.
      <div>
        <div className="header">
          <h1>ความสามารถต่างๆของระบบ</h1>
          <p>"การสร้างเว็บไซต์ได้เรียบง่ายสะดวกและรวดเร็ว"</p>
        </div>
        <div className="card-ctn">
          <div className="card">
            <div className='img'>
              <IoStorefrontOutline size={30} color='white' />
            </div>
            <div className="text">
              <h3>การจัดการร้านค้าออนไลน์</h3>
              <p>สร้างร้านค้าออนไลน์ของคุณ</p>
              <Link to={'./feature#feature-store'}>
                <button>ดูรายละเอียด</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className='img'>
              <IoStorefrontOutline size={30} color='white' />
            </div>
            <div className="text">
              <h3>ระบบร้านอาหารออนไลน์</h3>
              <p>สั่งออเดอร์ผ่านแอพได้ง่ายๆ</p>
              <Link to={'./feature#feature-restaurant-start'}>
                <button>ดูรายละเอียด</button>
              </Link>            </div>
          </div> <div className="card">
            <div className='img'>
              <IoStorefrontOutline size={30} color='white' />
            </div>
            <div className="text">
              <h3>หน้าเพจส่วนตัวสำหรับธุรกิจ</h3>
              <p>สร้างหน้าเพจได้ง่ายๆ</p>
              <Link to={'./feature'}>
                <button>ดูรายละเอียด</button>
              </Link>              </div>
          </div> <div className="card">
            <div className='img'>
              <IoStorefrontOutline size={30} color='white' />
            </div>
            <div className="text">
              <h3>การสมัครใช้งานที่เรียบง่าย</h3>
              <p></p>
              <Link to={'./feature'}>
                <button>ดูรายละเอียด</button>
              </Link>              </div>
          </div> <div className="card">
            <div className='img'>
              <IoStorefrontOutline size={30} color='white' />
            </div>
            <div className="text">
              <h3>ระบบหลังบ้านที่ครอบคลุม</h3>
              <p>แก้ไขหน้าเพจ เพิ่มสินค้า ดูยอดขาย</p>
              <Link to={'./feature'}>
                <button>ดูรายละเอียด</button>
              </Link>              </div>
          </div> <div className="card">
            <div className='img'>
              <IoStorefrontOutline size={30} color='white' />
            </div>
            <div className="text">
              <h3>การชำระเงินและการสั่งสินค้า</h3>
              <p>ตรวจสอบ อัพเดทสถานะ รายงาน</p>
              <Link to={'./feature'}>
                <button>ดูรายละเอียด</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Content4


