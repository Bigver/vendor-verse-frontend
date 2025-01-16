import React, { Suspense, lazy } from "react";
import { GoArrowRight } from "react-icons/go";


const templates: Record<number, React.LazyExoticComponent<React.FC<any>>> = {
  1: lazy(() => import("./Category1")),
  2: lazy(() => import("./Category2")),
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
  link: string;
  color: string;
  background: string;
  image: string[];
  template: number
}

const Category: React.FC<ContentProps> = ({ category, link, color, background, image , template }) => {
  const props = {
    category: category,
    image: image,
    link: link,
    color: color,
    background: background,
};
  return (
    <div className='category-1' style={{ color: color, background: background }}>
      <div className="text" data-aos="fade-up" data-aos-duration="500">
        <h1 style={{ color: color}}>SHOP BY CETEGORY</h1>
        <div className='btn'>
          <a href={`/store/${link}/products/all`} style={{ color: color }}>VIEW ALL <GoArrowRight /></a>
        </div>
      </div>
      <TemplateRenderer {...props} template={template} />
    </div>
  )
}

export default Category