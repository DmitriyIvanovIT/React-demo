import React from 'react';
import s from'./Footer.module.scss';


const Footer = ({ children }) => {
    return (
        <div className={s.footer}>
            <div className={s.wrap}>
                {children}
            </div>
        </div>
    )
};

export default Footer;