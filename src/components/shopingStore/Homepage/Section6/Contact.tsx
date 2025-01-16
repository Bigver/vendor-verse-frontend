import React, {  Suspense, lazy } from 'react';

const templates: Record<number, React.LazyExoticComponent<React.FC<any>>> = {
    1: lazy(() => import("./Contact1")),
    2: lazy(() => import("./Contact2")),
    3: lazy(() => import("./Contact3")),
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
    link_contact: string[];
    image: string;
    title: string;
    detail: string;
    link: string;
    color: string;
    background: string;
    template: number;
    store_id: number;
}



const Contact: React.FC<ContentProps> = ({link_contact , image , title , detail , color , background , template , store_id}) =>  {
    const props = {
        detail: detail,
        facebook: link_contact[0],
        instragram: link_contact[1],
        line: link_contact[2],
        email: link_contact[3],
        phone: link_contact[4],
        address: link_contact[5],
        image: image,
        title: title,
        color: color,
        background : background,
        store_id : store_id
    };


    return (
        <div className='contact-ctn'>
            <TemplateRenderer template={template} {...props} />
        </div>
    )
}

export default Contact