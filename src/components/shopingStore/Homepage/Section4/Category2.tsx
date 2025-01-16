import React from 'react'

interface ContentProps {
    category: string[];
    link: string;
    color: string;
    image: string[];
    background : string
}


const Category2: React.FC<ContentProps> = ({ category, link, color, image }) => {
    return (
        <div className="category-template-2">
            {category.slice(0, 6).map((item , index) => (
                <div className="card" key={index}>
                    <img src={image[index]} alt="" />
                    <a style={{color : color}} href={`/store/${link}/products/${item}`}>{item}</a>
                </div>
            ))}
        </div>
    )
}

export default Category2