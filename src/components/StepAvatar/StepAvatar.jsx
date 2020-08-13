import React from 'react';

import Avatar from '../Avatar/Avatar';
import FileInput from '../FileInput/FileInput';
import ValidationError from '../ValidationError/ValidationError';

function StepAvatar(props) {
    const {avatar, id, labelText, name, onChange, errors} = props;
    return(
        <>
            <Avatar avatar={avatar} />
            <FileInput
              id={id}
              labelText={labelText}
              name={name}
              onChange={onChange}
              error={errors.avatar}
            />
            <ValidationError error={errors.avatar}/>
        </>
    )
}
export default StepAvatar;