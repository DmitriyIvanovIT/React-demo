import React from 'react';
import s from'./TitleOne.module.scss';

const TitleOne =({ children }) => {
    return <h1 className={s.header}>{children}</h1>;
};

export default TitleOne;