import Main from '../Main';
import ChallengeTitleUI from '../UI/ChallengeTitleUI';
import ProfileUI from '../UI/ProfileUI';

const ChallengerPage = () => { 
  return (
    <div className='ChallengerPage'>
        <Main></Main>
        <div className='ChallengerListWrap'>
            <div>
                <ChallengeTitleUI time={15}></ChallengeTitleUI>
            </div>
            <div className='ChallengerList'>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
                <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
            </div>
        </div>
    </div>
  );
};

export default ChallengerPage;