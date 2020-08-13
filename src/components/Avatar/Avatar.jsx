import React from 'react';
import './Avatar.css';
import defaultAvatar from './default-avatar.png'

function Avatar(props) {
    const {avatar} = props;
    return(
        <div className="mb-3">
            <img src={avatar ? avatar : defaultAvatar} alt=""/>
        </div>
    )
}
export default Avatar;