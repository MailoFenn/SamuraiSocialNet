import React from 'react';

const Description = () => {
    return(
        <div className='description'>
            <div className='avatar'>
                <img src='https://avatarfiles.alphacoders.com/190/thumb-190579.jpg' alt='avatar'/>
            </div>
            <div className='info'>
                <div className='name'>Johny Silverhand</div>
                <div className='date'>Date of birth: 2 Jan</div>
                <div className='city'>City: Night City</div>
            </div>
        </div>
    );
}

export default Description;