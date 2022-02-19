import Main from '../Main'
import ChallengeDayUI from '../UI/ChallengeDayUI'
import ChallengeTitleUI from '../UI/ChallengeTitleUI'

const ChallengeCertifyPage = (props) => { 
  // hooks 사용
  // document.querySelector('.ChallengeSumitDone').style.display = 'none';
  return (
    <div className='ChallengeCertifyPage'>
      <Main></Main>
      <div className='challengeCertifyWrap'>
        {/* map으로 찍기 */}
        <ChallengeTitleUI time={15} 
                          detail='한 달 동안 매일 30분씩 독서하는 습관 만들기' 
                          date='2022.02.04 ~ 2022.03.04'>
        </ChallengeTitleUI>
        <div className='challengeCertifyDayUIWrap'>
          <ChallengeDayUI day={1}
                          time={30}
                          success='SUCCESS'
                          img='./days/day1.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
          <ChallengeDayUI day={2}
                          time={30}
                          success='SUCCESS'
                          img='./days/day2.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
          <ChallengeDayUI day={3}
                          time={30}
                          success='SUCCESS'
                          img='./days/day2.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
          <ChallengeDayUI day={4}
                          time={30}
                          success='SUCCESS'
                          img='./days/day2.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
          <ChallengeDayUI day={5}
                          time={30}
                          success='SUCCESS'
                          img='./days/day3.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
          <ChallengeDayUI day={6}
                          time={30}
                          success='SUCCESS'
                          img='./days/day3.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
          <ChallengeDayUI day={7}
                          time={30}
                          success='SUCCESS'
                          img='./days/day3.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
          <ChallengeDayUI day={8}
                          time={30}
                          success='SUCCESS'
                          img='./days/day3.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
          <ChallengeDayUI day={9}
                          time={30}
                          success='SUCCESS'
                          img='./days/day3.png'
                          content='챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅!챌린지 시작!! 다들 파이팅! 린지 시작!! 다들'>
          </ChallengeDayUI>
        </div>
        <div className='challengeCertifyBtnWrap'>
          <div className='challengeCertifyBtn'>
            <div>
              <p>시간 인증해주세요!</p>
              {/* 이미지 업로드 기능 추가 */}
              <img src='./uploadBtn.png' alt='이미지를 찾을 수 없습니다.'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCertifyPage;