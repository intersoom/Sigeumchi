import React, { useState, useEffect } from 'react';


const ChallengeSubmitBtnUI = (props) => { 
  const [submitCon, setSubmitCon] = useState('');

  useEffect(() => {
    setSubmitCon(props.submitCon)
  }, [props.submitCon])

  return (
    <div className='ChallengeSubmitBtnUI'>
      <div className='ChallengeSubmitBtnWrap'>
        <div className='challengeSubmitLogo'>
          <img clasName='challengeSubmitLogoImg' src='./sigeumchi.png' alt='이미지를 찾을 수 없습니다.'></img>
        </div>
        <button className='challengeSubmitBtn' type='submit'>{submitCon}</button>
      </div>
    </div>
  );
};

export default ChallengeSubmitBtnUI;