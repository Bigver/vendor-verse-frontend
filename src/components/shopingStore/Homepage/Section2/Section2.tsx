import React, { useState, useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
import { requestMethod } from "../../../../requestMethod";

const templates: Record<number, React.LazyExoticComponent<React.FC<any>>> = {
    1: lazy(() => import("./ProductPopular1")),
    2: lazy(() => import("./ProductPopular2")),
    3: lazy(() => import("./ProductPopular3")),
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
    link: string;
    color: string;
    background: string;
    template: number
    store_id: number
}

const Popular: React.FC<ContentProps> = ({ link, color, background, template, store_id }) => {
    const [productData, setProductData]: any[] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${requestMethod}/store/product/find/product/${store_id}/all`);
                setProductData(response.data);
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        };
        fetchProducts();
    }, []);

    const props = {
        product: productData,
        link: link,
        color: color,
    };
    return (
        <div className='popular-ctn' style={{ background: background }}>
            <div className="text" data-aos="fade-up" data-aos-duration="500">
                <h1 style={{ color: color }}>New Arrivals</h1>
                <div className='btn'>
                    <a href="" style={{ color: color, borderColor: color , cursor : 'pointer' }}>view more</a>
                </div>
            </div>
            {loading ? "LOADING" :
                <div>
                    <TemplateRenderer {...props} template={template} />
                </div>
            }
        </div>

    )
}

export default Popular