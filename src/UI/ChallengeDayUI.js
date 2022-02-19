import React, { useState, useEffect } from 'react';

const ChallengeDayUI = (props) => { 
    const [time, setTime] = useState();
    const [day, setDay] = useState();
    const [success, setSuccess] = useState();
    const [img, setImg] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        setTime(props.time);
        setDay(props.day);
        setSuccess(props.success);
        setImg(props.img);
        setContent(props.content)
    }, [props.time, props.day, props.success, props.img, props.content]);

  return (
    <div className='ChallengeDayUI'>
        <div className='challengeDayProfile'>
            <img src={img} alt='이미지를 찾을 수 없습니다.'></img>
            <p>Day {day}</p>
        </div>
        <div className='challengeDayContents'>
            <div className='challengDayContent'>
                <p>{content}</p>
            </div>
            
            <div className='challengDayTime'>
                <p>+{time}분</p>
                <p>{success}</p>
            </div>
        </div>
    </div>
  );
};

export default ChallengeDayUI;