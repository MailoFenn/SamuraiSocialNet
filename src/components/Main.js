import React from 'react';
import bg from '../bg.jpg'
import Description from "./Description";
import Posts from "./Posts";

const Main = () => {
    return(
        <div className='main'>
            <img src={bg} className='bg' alt='background'/>
            <Description />
            <Posts />
        </div>
    );
}

export default Main;