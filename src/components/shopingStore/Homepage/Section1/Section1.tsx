import React, { Suspense, lazy } from "react";
const templates: Record<number, React.LazyExoticComponent<React.FC<any>>> = {
    1: lazy(() => import("./Template1")),
    2: lazy(() => import("./Template2")),
    3: lazy(() => import("./Template3")),
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
    image: string;
    title: string;
    detail: string;
    link: string;
    color: string;
    background: string;
    template: number
}


const Template: React.FC<ContentProps> = ({ image, link, color, background, title, detail, template }) => {
    const props = {
        color: color,
        image: image,
        link: link,
        background: background,
        title: title,
        detail: detail,
    };
    return (
        <div>
            <TemplateRenderer {...props} template={template} />
        </div>
    )
}

export default Template