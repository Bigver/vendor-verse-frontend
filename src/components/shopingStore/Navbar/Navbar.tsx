import React, { Suspense, lazy } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { requestMethod } from "../../../requestMethod";
import axios from 'axios';

const MySwal = withReactContent(Swal);

const templates: Record<number, React.LazyExoticComponent<React.FC<any>>> = {
  1: lazy(() => import("./Navbar1")),
  2: lazy(() => import("./Navbar2")),
  3: lazy(() => import("./Navbar3")),
  4: lazy(() => import("./Navbar4")),
};

const TemplateRenderer = ({
  template,
  ...props
}: {
  template: number;
  [key: string]: any;
}) => {
  const TemplateComponent = templates[template];
  return TemplateComponent ? (
      <Suspense fallback={<div>Loading template...</div>}>
          <TemplateComponent {...props} />
      </Suspense>
  ) : (
      <div>Template not found</div>
  );
};

interface ContentProps {
  category: string[];
  logo: string;
  link: string;
  color: string;
  background: string;
  template: number;
}

const Navbar: React.FC<ContentProps> = ({ logo, category, link, color, background, template }) => { 
  const savedCart = localStorage.getItem("cartItemsStore");
  const cartItems = savedCart ? JSON.parse(savedCart) : [];


  const showAlertWithInput = () => {
    MySwal.fire({
      title: "Search Order",
      input: "number", // กำหนดชนิดของ input
      inputPlaceholder: "ค้นหาคำสั่งซ์้อ(email,เลขคำสั่งซื้อ)",
      showCancelButton: true,
      confirmButtonText: "ค้นหา",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        const id = result.value; // รับค่าที่ผู้ใช้กรอก
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              `${requestMethod}/store/order/find/${id}`
            );
            Swal.fire({
              title: `ORDER ID : ${id.toString()}`,
              html: `การจัดส่ง : ${response.data.shipping_status} <br> สถานะการชำระเงิน : ${response.data.payment_status}`,
            }); // แสดงค่าใน SweetAlert
          } catch (error) {
            Swal.fire("ไม่มีข้อมูล");
          }
        };
        fetchUsers();
      }
    });
  };
  const props = {
    logo: logo,
    category: category,
    link: link,
    color: color,
    background: background,
    cartLength : cartItems.length
};
  return (
    <div>
      <TemplateRenderer {...props} template={template} handleOnClick={showAlertWithInput} />
    </div>
  )
}

export default Navbar