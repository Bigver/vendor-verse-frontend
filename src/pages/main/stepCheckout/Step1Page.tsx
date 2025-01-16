import { useEffect } from 'react'
import Navbar from '../../../components/main/Navbar'
import { useNavigate } from 'react-router-dom';


const StepPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/package')
        }

    }, []);

    const savedCart = localStorage.getItem("cartItems");
    const cartItems = savedCart ? JSON.parse(savedCart) : [];

    const handleOnClick = (id: any) => {
        if (id === 1) {
            window.location.href = '/step3'
        } else {
            window.location.href = '/step2'
        }
    }

    return (
        <div>
            <Navbar nav='navbar-ctn' />
            <div className="step-ctn">
                <div className="header"><h1>SELECT PACKAGE</h1></div>
                <div className="container-fluid">
                    <br /><br />
                    <ul className="list-unstyled multi-steps">
                        <li className="is-active">PACKAGE</li>
                        <li>PAYMENT</li>
                        <li>SELECT WEBSITE</li>
                        <li>NAME WEBSITE</li>
                        <li>SELECT TEMPLATE</li>
                        <li>FINISH</li>
                    </ul>
                </div>
                <div className='content-ctn'>
                    <div className="card">
                        <div className="text">
                            {cartItems.length != 0 ?
                                <div>
                                    <h1>{cartItems[0].package.name}</h1>
                                    <p>{cartItems[0].package.detail}</p>
                                    <div className="price">
                                        <h1>{cartItems[0].package.price} <span> ฿ /month</span></h1>
                                    </div>
                                    <div className="feature">
                                        <h2>&#183; {cartItems[0].package.order} order/day</h2>
                                        <h2>&#183; {cartItems[0].package.product} product</h2>
                                        <h2>&#183; {cartItems[0].package.duration} day</h2>
                                    </div>
                                </div>
                                : ""}
                        </div>
                    </div>
                    <div className='link'>
                        <div></div>
                        {cartItems.length != 0 ?
                            <a onClick={() => handleOnClick(cartItems[0].package.id)}>NEXT</a>
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepPage