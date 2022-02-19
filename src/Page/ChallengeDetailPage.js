import ChallengeInfoUI from "../UI/ChallengeInfoUI";
import ChallengeUI from "../UI/ChallengeUI";
import ChallengeSubmitBtnUI from '../UI/ChallengeSubmitBtnUI';
import ChallengeSumitDone from "../UI/ChallengeSubmitDoneUI";

const ChallengeDetailPage = () => { 
  // hooks 사용
  // document.querySelector('.ChallengeSumitDone').style.display = 'none';
  return (
    <div className='ChallengeDetailPage'>
      <ChallengeSumitDone></ChallengeSumitDone>
      <div className="challengeDetailWrap">
        <div className="challegeBackWrap">
          <button className="challengeBackBtn">{'< 이전'}</button>
        </div>
        <ChallengeUI  time='15' 
                      detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' 
                      img='./profile/friends.png'>
        </ChallengeUI>
        <ChallengeInfoUI  condition='넷플릭스 구독중'
                          duration='2022.03.07 ~ 2022.04.06 (31일)'
                          doneTime={15}
                          participationCount={23}
                          maxParticipation={100}>
        </ChallengeInfoUI>
      </div>

      <ChallengeSubmitBtnUI submitCon='챌린지 참여하기'></ChallengeSubmitBtnUI>
    </div>
  );
};

export default ChallengeDetailPage;