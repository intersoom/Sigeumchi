import '../css/main.css'
import React, { useState, useEffect } from 'react';

const ProfileUI = (props) => { 
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    setName(props.name);
    setBio(props.bio);
    setImg(props.img);
  }, [props.name, props.bio, props.img]);

  return (
    <div className='ProfileUI'>
        <div className='profileImg' style={{
            width: '72px', height: '72px',
            borderRadius: '72px',
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover'
        }}></div>
        <div className='profileInfoWrap'>
            <div className='profileName'>{name}</div>
            <div className='profileBio'>{bio}</div>
        </div>
    </div>
  );
};

export default ProfileUI;