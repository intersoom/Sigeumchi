import ChallengeTitleUI from '../UI/ChallengeTitleUI';
import ProfileUI from '../UI/ProfileUI';
import db  from '../constant/db.json'
import { useNavigate } from 'react-router-dom';

const ChallengerPage = () => { 
    const navigate = useNavigate();
  return (
    <div className='ChallengerPage'>
        <div className="challegeBackWrap">
          <button className="challengeBackBtn" onClick={() => {
            navigate(-1)}}>{'< 이전'}</button>
        </div>
        <div className='ChallengerListWrap'>
            <div className='challengerTitleWrap'>
                <h1>현재</h1>
                <h1>챌린지 참여중인 사람들</h1>
            </div>
            <div className='challengerList'>
                {db.profile.map((value)=>
                   <ProfileUI
                           key={value.id} 
                           name={value.name}
                           img={`./profile/${value.img}.png`}
                           bio={value.description}
                       >
                           {console.log(value)}
                    </ProfileUI> 
                )}
            </div>
        </div>
    </div>
  );
};

export default ChallengerPage;