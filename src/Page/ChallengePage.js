import Main from '../Main';
import ChallengeUI from '../UI/ChallengeUI';

const ChallengePage = () => { 
  return (
    <div className='ChallengePage'>
        <Main></Main>
        <div className='challengeSearchWrap'>
            <input  name='challengeSearch'
                    className='challengeSearch'
                    placeholder='관심 있는 챌린지를 검색해보세요!'>                
            </input>
        </div>
        <div className='ChallengeListWrap'>
            <div className='ChallengeList'>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
                <ChallengeUI time='15' detail='넷플릭스 ‘프렌즈’ 와 매일 22분씩 영어 공부하기' img='./profile/friends.png'></ChallengeUI>
            </div>
        </div>
    </div>
  );
};

export default ChallengePage;