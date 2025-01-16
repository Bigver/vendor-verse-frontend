import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-ctn'>
      <div className="footer-1">
        <div className="header">
          <img src={logo} alt="" />
          <p>ช่วยสร้างเว็บไซต์ให้กับคุณ</p>
        </div>
        <div className="content">
          <h1>FEATURE</h1>
          <p>ระบบร้านค้า</p>
          <p>ระบบจัดการร้านอาหาร</p>
          <p>ระบบจัดการหลังบ้าน</p>
        </div>
        <div className="content">
          <h1>ร้านค้าใหม่</h1>
          <p>เริ่มต้นการใช้งาน VendorVerse</p>
          <p>VendorVerse คืออะไร?</p>
        </div>
      </div>
    </div>
  )
}

export default Footer