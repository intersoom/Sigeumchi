import { useState } from 'react';
import ChallengeUI from './ChallengeUI';
import db  from '../constant/db.json'

const TopUI = (props) => { 
  let rank = []

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
           {
        
           db.challenge.map((value)=>
            value.ranking <= 3 ?

              <ChallengeUI
                key={value.id} 
                pageId = {value.id}
                img={`./profile/${value.ranking}Place.png`}
                time={value.time} 
                detail={value.description}
                rank={value.ranking}
                etc='top'
              >
              </ChallengeUI>
            : null)}
           </div>
        </div>
    </div>

  );
};

export default TopUI;