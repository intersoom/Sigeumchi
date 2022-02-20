import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengeSubmitBtnUI = (props) => { 
  const [submitCon, setSubmitCon] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setSubmitCon(props.submitCon)
  }, [props.submitCon])

  return (
    <div className='ChallengeSubmitBtnUI'>
      <div className='ChallengeSubmitBtnWrap'>
        <div className='challengeSubmitLogo'>
          <img className='challengeSubmitLogoImg' src='../sigeumchi.png' alt='이미지를 찾을 수 없습니다.'></img>
        </div>
        <button className='challengeSubmitBtn' type='submit' onClick={() => {
            navigate('/submit')}}>{submitCon}</button>
      </div>
    </div>
  );
};

export default ChallengeSubmitBtnUI;