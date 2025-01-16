import React from 'react'
import Footer1 from './Footer1';


interface ContentProps {
    category: string[];
    logo: string;
    link: string;
    link_contact: string[];
    detail: string;
    color : string;
    background : string;
    template : number
}

const Footer: React.FC<ContentProps> = ({ category, logo, link, link_contact, detail , color , background }) => {
    return (
        <div>
            <Footer1 logo={logo} category={category} link={link} link_contact={link_contact} detail={detail} color={color} background={background} />
        </div>

    )
}

export default Footer