import React from 'react';
import s from'./Header.module.scss';


const Header = ({ children }) => {
    return (
        <div className={s.heading}>
            <div className={s.wrap}>
                {children}
            </div>
        </div>
    )
};

export default Header;