// import React, { useState, useEffect } from 'react';
import { useState } from 'react';
import ChallengeUI from './ChallengeUI';
import CompletionBar from './CompletionBarUI';
import db  from '../constant/db.json'

const ParticipatingUI = (props) => {   

  return (
    <div className='ParticipatingUI'>
       <div className='mainTitle'>참여 중인 챌린지</div>
       <div className='challengeWrap'>
           <div className='challenges'>
           {db.challenge.map((value)=>
              value.participating?
              <>
                <ChallengeUI
                  key={value.id} 
                  pageId = {value.id}
                  img={`./profile/${value.img}.png`}
                  time={value.time} 
                  detail={value.description}
                  etc='main'
                >
                </ChallengeUI> 
                <CompletionBar  
                key={value.id}
                work={value.completeTime} 
                complete={value.time}>
                </CompletionBar>
              </>
              :null
                )}
           </div>
        </div>
    </div>

  );
};

export default ParticipatingUI;