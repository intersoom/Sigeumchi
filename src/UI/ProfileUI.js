import '../css/main.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileUI = (props) => { 
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setName(props.name);
    setBio(props.bio);
    setImg(props.img);
  }, [props.name, props.bio, props.img]);

  return (
    <div className='ProfileUI' onClick={() => {
      navigate('/challenger')}}>
        <div className='profileImg' style={{
            width: '65px', height: '65px',
            borderRadius: '65px',
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