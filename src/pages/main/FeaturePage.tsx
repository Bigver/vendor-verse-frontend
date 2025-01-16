import Sidebar from '../../components/main/Sidebar';
import { GoChevronRight } from "react-icons/go";
import Start from '../../components/main/feature/Start';
import StoreFeature from '../../components/main/feature/StoreFeature';
import RestaurantFeature from '../../components/main/feature/RestaurantFeature';

const FeaturePage = () => {

    return (
        <div>
            <div className="feature-ctn">
                <Sidebar />
                <div className="content">
                    <div className="title"><h1>เริ่มต้นการใช้งาน VENDORVERSE <GoChevronRight /></h1></div>
                    <div className="text">
                        <Start/>
                        <StoreFeature/>
                        <RestaurantFeature/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturePage