import Main from '../Main';
import ChallengeUI from '../UI/ChallengeUI';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db  from '../constant/db.json'

const ChallengePage = () => { 
    const params = useParams();
    
    useEffect(()=>{
        console.log(db)
        console.log(params)
    },[])
 
  return (
    <div className='ChallengePage'>
        <Main status='challenge'></Main>
        <div className='challengeSearchWrap'>
            <input  name='challengeSearch'
                    className='challengeSearch'
                    placeholder='관심 있는 챌린지를 검색해보세요!'
                    >                
            </input>
        </div>
        <div className='ChallengeListWrap'>
            <div className='ChallengeList'>
                {db.challenge.map((value)=>
                   <ChallengeUI
                           key={value.id} 
                           pageId = {value.id}
                           img={`./profile/${value.img}.png`}
                           time={value.time} 
                           detail={value.description}
                           etc='none'
                           onclick={value.key}
                       >
                           {console.log(value)}
                    </ChallengeUI> 
                )}
            </div>
        </div>
    </div>
  );
};

export default ChallengePage;