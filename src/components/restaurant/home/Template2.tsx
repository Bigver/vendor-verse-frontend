import React from 'react'


interface ContentProps {
    link: string;
    store_id: number;
    category: string[];
    category_image : string[]
}


const Template2: React.FC<ContentProps> = ({ link, store_id, category , category_image }) => {
    console.log(category_image)
    return (
        <div className='home-ctn-5'>
            <div className="card-ctn">
                {category_image[0] && category[0] && (
                    <div className="card">
                        <img src={category_image[0]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[0]}/${store_id}`}>{category[0]}</a>
                        </div>
                    </div>
                )}
                {category_image[1] && category[1] && (
                    <div className="card">
                        <img src={category_image[1]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[1]}/${store_id}`}>{category[1]}</a>
                        </div>
                    </div>
                )}
                {category_image[2] && category[2] && (
                    <div className="card">
                        <img src={category_image[2]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[2]}/${store_id}`}>{category[2]}</a>
                        </div>
                    </div>
                )}
                {category_image[3] && category[3] && (
                    <div className="card">
                        <img src={category_image[3]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[3]}/${store_id}`}>{category[3]}</a>
                        </div>
                    </div>
                )}
                {category_image[4] && category[4] && (
                    <div className="card">
                        <img src={category_image[4]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[4]}/${store_id}`}>{category[4]}</a>
                        </div>
                    </div>
                )}
                {category_image[5] && category[5] && (
                    <div className="card">
                        <img src={category_image[5]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[5]}/${store_id}`}>{category[5]}</a>
                        </div>
                    </div>
                )}
                {category_image[6] && category[6] && (
                    <div className="card">
                        <img src={category_image[6]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[6]}/${store_id}`}>{category[6]}</a>
                        </div>
                    </div>
                )}
                {category_image[7] && category[7] && (
                    <div className="card">
                        <img src={category_image[7]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[7]}/${store_id}`}>{category[7]}</a>
                        </div>
                    </div>
                )}
                {category_image[8] && category[8] && (
                    <div className="card">
                        <img src={category_image[8]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[8]}/${store_id}`}>{category[8]}</a>
                        </div>
                    </div>
                )}
                {category_image[9] && category[9] && (
                    <div className="card">
                        <img src={category_image[9]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[9]}/${store_id}`}>{category[9]}</a>
                        </div>
                    </div>
                )}
                {category_image[10] && category[10] && (
                    <div className="card">
                        <img src={category_image[10]} alt="" />
                        <div className="text">
                            <a href={`/restaurant/${link}/menus1/${category[10]}/${store_id}`}>{category[10]}</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Template2