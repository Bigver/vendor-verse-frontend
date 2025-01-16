import React, { Suspense, lazy } from "react";


const templates: Record<number, React.LazyExoticComponent<React.FC<any>>> = {
    1: lazy(() => import("./home/Template1")),
    2: lazy(() => import("./home/Template2")),
    3: lazy(() => import("./home/Template3")),
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
  store_id: number;
  category: string[];
  image: string[];
  template: number;
  category_image: string[];
  category_template: number;
  title: string;
  detail: string
}


const Template: React.FC<ContentProps> = ({ link, store_id, category, image, template, title, detail, category_template, category_image }) => {
  const props = {
    image: image,
    link: link,
    title: title,
    detail: detail,
    store_id : store_id,
    category : category,
    template : template,
    category_image : category_image,
    category_template : category_template
};
  return (
    <div>
    <TemplateRenderer {...props} template={template} />
</div>
  )
}

export default Template