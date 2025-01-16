import React, { Suspense, lazy } from "react";


const templates: Record<number, React.LazyExoticComponent<React.FC<any>>> = {
  1: lazy(() => import("../../About/About1")),
  2: lazy(() => import("../../About/About2")),
  3: lazy(() => import("../../About/About3")),
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
const About_2: React.FC<ContentProps> = ({ image, title, detail, link, color, background, template }) => {
  const props = {
    title: title,
    image: image,
    detail: detail,
    link: link,
    color: color,
    background: background,
};
  return (
    <div>
      <TemplateRenderer {...props} template={template} />
    </div>

  )
}

export default About_2