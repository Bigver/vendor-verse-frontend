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
          <a href='/feature#feature-store'>- ระบบร้านค้า</a>
          <a href='/feature#feature-restaurant-start'>- ระบบร้านอาหาร</a>
        </div>
        <div className="content">
          <h1>เรียนรู้การใช้งาน</h1>
          <a href='/blogs'>- เริ่มต้นการใช้งาน VendorVerse</a>
          <a href='/blogs'>- VendorVerse คืออะไร?</a>
        </div>
      </div>
    </div>
  )
}

export default Footer