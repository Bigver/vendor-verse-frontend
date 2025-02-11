import { useState } from 'react'
import Navbar from '../../../components/main/Navbar'
import { templateStore } from '../../../components/main/data/template'
import { templateRestaurant } from '../../../components/main/data/templateRestaurant'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { requestMethod } from "../../../requestMethod";

const Step5Page = () => {
    const [template, setTemplate]: any = useState();
    const params = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (item: any) => {
        if (isSubmitting) {
            toast.warning("กรุณารอสักครู่");
            return
        }; // ป้องกันการส่งซ้ำ
        setIsSubmitting(true); // ตั้งค่าเป็นกำลังส่ง

        try {
            await axios.put(`${requestMethod}/store/page/update/template/${params.store_id}`, {
                product: item.product,
                page: item.page,
                navbar: item.navbar,
                section1: item.section1,
                section2: item.section2,
                section3: item.section3,
                section4: item.section4,
                section5: item.section5,
                section6: item.section6,
                footer: item.footer
            });
            toast.success("successfully!");
            window.location.href = `/step6`
        } catch (error) {
            toast.error("Failed");
        } finally {
            setIsSubmitting(false); // ปลดล็อกให้สามารถส่งได้อีกครั้งเมื่อเสร็จสิ้น
        }
    }

    const handleSubmitRestaurant = async (item: any) => {
        if (isSubmitting) {
            toast.error("กรุณารอสักครู่");
            return
        }; // ป้องกันการส่งซ้ำ
        setIsSubmitting(true); // ตั้งค่าเป็นกำลังส่ง
        try {
            await axios.put(`${requestMethod}/restaurant/page/update/template/${params.store_id}`, {
                theme: item.theme,
                template: item.template,
                title: item.title,
                detail: item.detail,
                image: item.image,
                category: item.category,
                category_template: item.category_template,
                category_image: item.category_image,
                menus: item.menus,
            });
            toast.success("successfully!");
            window.location.href = `/step6`
        } catch (error) {
            toast.error("Failed");
        } finally {
            setIsSubmitting(false); // ปลดล็อกให้สามารถส่งได้อีกครั้งเมื่อเสร็จสิ้น
        }
    }
    return (
        <div>
            <Navbar nav="navbar-ctn" />
            <div className="step-ctn">
                <div className="header"><h1>SELECT TEMPLATE</h1></div>
                <div className="container-fluid">
                    <br /><br />
                    <ul className="list-unstyled multi-steps">
                        <li>PACKAGE</li>
                        <li>PAYMENT</li>
                        <li>SELECT WEBSITE</li>
                        <li>NAME WEBSITE</li>
                        <li className="is-active">SELECT TEMPLATE</li>
                        <li>FINISH</li>
                    </ul>
                </div>
                <div className="content-template">
                    {params.select_store === "store" ?
                        <>
                            {
                                templateStore.map((item: any) => (
                                    <div className="card" key={item.id}>
                                        <div className="img"><img src={item.image} alt="" /></div>
                                        <div className="text">
                                            <h1>{item.title}</h1>
                                        </div>
                                        <div className="input">
                                            <input type="radio" name='template' onChange={() => setTemplate(item)} />
                                        </div>
                                    </div>
                                ))
                            }</> : ""}
                    {params.select_store === "restaurant" ?
                        <>
                            {
                                templateRestaurant.map((item: any) => (
                                    <div className="card" key={item.id}>
                                        <div className="img"><img src={item.image_exaple} alt="" style={{ height: '100%', maxHeight: '70vh' }} /></div>
                                        <div className="text">
                                            <h1>{item.restaurant}</h1>
                                        </div>
                                        <div className="input">
                                            <input type="radio" name='template' onChange={() => setTemplate(item)} />
                                        </div>
                                    </div>
                                ))
                            }</> : ""}

                </div>
                <div className='link'>
                    <div></div>
                    {params.select_store === "store" ?
                        <a onClick={() => handleSubmit(template)}>NEXT</a>
                        : ""}
                    {params.select_store === "restaurant" ?
                        <a onClick={() => handleSubmitRestaurant(template)}>NEXT</a>
                        : ""}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Step5Page