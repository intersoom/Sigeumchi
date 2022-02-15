// import React, { useState, useEffect } from 'react';
import Challenge from './ChallengeUI';
import CompletionBar from './CompletionBarUI';

const ParticipatingUI = (props) => { 

  return (
    <div className='ParticipatingUI'>
       <div className='mainTitle'>참여 중인 챌린지</div>
       <div className='challengeWrap'>
           <div className='challenges'>
               {/* 여기 map으로 찍도록 수정하기 */}
                <Challenge  img='./profile/challengeOne.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'
                            etc='none'>
                </Challenge>
                <CompletionBar  work={10} 
                                complete={30}>
                </CompletionBar>
                <Challenge  img='./profile/challengeOne.png' 
                            time={9} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'>
                </Challenge>
                <CompletionBar  work={6} 
                                complete={9}>
                </CompletionBar>
                <Challenge  img='./profile/challengeOne.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'>
                </Challenge>
                <CompletionBar  work={10} 
                                complete={30}>
                </CompletionBar>
                <Challenge  img='./profile/challengeOne.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'>
                </Challenge>
                <CompletionBar  work={10} 
                                complete={30}>
                </CompletionBar>
                <Challenge  img='./profile/challengeOne.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'>
                </Challenge>
                <CompletionBar  work={24} 
                                complete={50}>
                </CompletionBar>
                <Challenge  img='./profile/challengeOne.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'>
                </Challenge>
                <CompletionBar  work={10} 
                                complete={30}>
                </CompletionBar>
                <Challenge  img='./profile/challengeOne.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'>
                </Challenge>
                <CompletionBar  work={10} 
                                complete={30}>
                </CompletionBar>
                <Challenge  img='./profile/challengeOne.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'>
                </Challenge>
                <CompletionBar  work={10} 
                                complete={30}>
                </CompletionBar>
                <Challenge  img='./profile/challengeOne.png' 
                            time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기'>
                </Challenge>
                <CompletionBar  work={10} 
                                complete={30}>
                </CompletionBar>
           </div>
        </div>
    </div>

  );
};

export default ParticipatingUI;