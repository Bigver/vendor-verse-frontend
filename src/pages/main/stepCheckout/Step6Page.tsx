import Navbar from '../../../components/main/Navbar'


const Step6Page = () => {
    return (
        <div>
            <Navbar nav="navbar-ctn" />
            <div className="step-ctn">
                <div className="container-fluid">
                    <br /><br />
                    <ul className="list-unstyled multi-steps">
                        <li>PACKAGE</li>
                        <li>PAYMENT</li>
                        <li>SELECT WEBSITE</li>
                        <li>NAME WEBSITE</li>
                        <li>SELECT TEMPLATE</li>            
                        <li className="is-active">FINISH</li>
                    </ul>
                </div>
                <div className="content-step5">
                    <div className="card">
                        <div className="img"><img src="https://res.cloudinary.com/daiu8h0ep/image/upload/v1736766978/fornt-end-vendorverse/complete_gzgkv5.png" alt="" /></div>
                        <div className="text">
                            <h1>สร้างร้านค้าสำเร็จ</h1>
                        </div>
                    </div>
                </div>
                <div className='link'>
                    <div></div>
                    <a href="/manage">จัดการร้านค้า</a>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Step6Page