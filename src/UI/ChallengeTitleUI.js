import React, { useState, useEffect } from 'react';

const ChallengeTitleUI = (props) => { 
    const [time, setTime] = useState();
    const [detail, setDetail] = useState('');
    const [date, setDate] = useState();

    useEffect(() => {
        setTime(props.time);
        setDetail(props.detail);
        setDate(props.date);
    }, [props.time, props.detail, props.date]);

    return (
        <div className='ChallengeTitleUI'>
            <div>
                <h1><b>{time}시간</b> 챌린지</h1>
                <p>{detail}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default ChallengeTitleUI;