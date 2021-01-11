import React from 'react';
import bg from '../bg.jpg'
import Description from "./Description";
import Posts from "./Posts";
import css from './Main.module.css'

const Main = () => {
    return(
        <div className={css.main}>
            <img src={bg} className={css.bg} alt='background'/>
            <Description />
            <Posts />
        </div>
    );
}

export default Main;