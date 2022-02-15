import Main from '../Main';
import ProfileUI from '../UI/ProfileUI';
import ParticipatingUI from '../UI/ParticipatingUI';
import TopUI from '../UI/TopUI';

const MainPage = () => { 
  return (
    <div className='MainPage'>
        <Main></Main>
        <ProfileUI name='뽀빠이' bio='시금치 좋아하는 챌린저' img='profile/popye.png'></ProfileUI>
        <ParticipatingUI></ParticipatingUI>
        <TopUI></TopUI>
    </div>
  );
};

export default MainPage;