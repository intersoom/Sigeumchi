// import React, { useState, useEffect } from 'react';
import Challenge from './ChallengeUI';

const TopUI = (props) => { 

  return (
    <div className='TopUI'>
       <div className='mainTitle'>인기 챌린지</div>
       <div className='topWrap'>
        <img src='./profile/topTrophie.png' alt='이미지를 찾을 수 없습니다'
          style={{
            width: '83px',
            height: '101px'
          }}
        ></img>
           <div className='topChallenges'>
               {/* 여기 map으로 찍도록 수정하기 */}
                <Challenge  img='./profile/firstPlace.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'
                            etc='top'>
                </Challenge>
                <Challenge  img='./profile/secondPlace.png' 
                            time={9} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'
                            etc='top'>
                              
                </Challenge>
                <Challenge  img='./profile/thirdPlace.png' 
                            time={9} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'
                            etc='top'>
                </Challenge>
           </div>
        </div>
    </div>

  );
};

export default TopUI;