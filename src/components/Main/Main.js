import React from 'react';
import bg from '../../bg.jpg'
import Description from "./Deacription/Description";
import AllPosts from "./AllPosts/AllPosts";
import css from './Main.module.css'

const Main = () => {
    return(
        <div className={css.main}>
            <img src={bg} className={css.bg} alt='background'/>
            <Description />
            <AllPosts />
        </div>
    );
}

export default Main;