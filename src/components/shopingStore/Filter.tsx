
import { IoSearchOutline } from "react-icons/io5";

const Filter = () => {
    return (
        <div className='filter-ctn'>
            <div className='filter'>
                <div className="category">
                    <div className="content">
                        <h1>ALL</h1>
                    </div>
                    <div className="content">
                        <h1>WOMEN</h1>
                    </div>
                    <div className="content">
                        <h1>MEN</h1>
                    </div>
                    <div className="content">
                        <h1>HAT</h1>
                    </div>
                </div>
                <div className="filter1">
                        <input type="text" placeholder='ค้นหาสินค้า' />
                        <div className='icon'><IoSearchOutline size={20} /></div>
                </div>
            </div>
        </div>
    )
}

export default Filter