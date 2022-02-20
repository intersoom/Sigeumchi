import ChallengeInfoUI from "../UI/ChallengeInfoUI";
import ChallengeUI from "../UI/ChallengeUI";
import ChallengeSubmitBtnUI from '../UI/ChallengeSubmitBtnUI';
import ChallengeSumitDone from "./ChallengeSubmitDoneUI";

import { useNavigate, useParams } from 'react-router-dom';
import db  from '../constant/db.json'

const ChallengeDetailPage = () => { 
  const navigate = useNavigate();
  const params = useParams();
  console.log(db)
  const {key,description,time,completeTime,condition,participation,tag,duration,detailedDes,ranking,img,participating} = db.challenge[params.id] 
  return (
    <div className='ChallengeDetailPage'>
      {/* <ChallengeSumitDone></ChallengeSumitDone> */}
      <div className="challengeDetailWrap">
        <div className="challegeBackWrap">
          <button className="challengeBackBtn" onClick={() => {
            navigate(-1)}}>{'< 이전'}</button>
        </div>
{/* 
        {challengeInfo} */}


        <ChallengeUI  key={key}
                      time={time}
                      detail={description}
                      img={`../profile/${img}.png`}>
        </ChallengeUI>
        <ChallengeInfoUI  condition={condition}
                          duration={duration}
                          doneTime={completeTime}
                          description={description}
                          participationCount={participation}
                          maxParticipation={participation}>
        </ChallengeInfoUI>
      </div>

      <ChallengeSubmitBtnUI submitCon='챌린지 참여하기'></ChallengeSubmitBtnUI>
    </div>
  );
};

export default ChallengeDetailPage;