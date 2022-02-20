import Main from '../Main'
import ChallengeDayUI from '../UI/ChallengeDayUI'
import ChallengeTitleUI from '../UI/ChallengeTitleUI'
import db  from '../constant/db.json'
import { useNavigate } from 'react-router-dom';

const ChallengeCertifyPage = (props) => { 
  const navigate = useNavigate();
  // hooks 사용
  // document.querySelector('.ChallengeSumitDone').style.display = 'none';
  return (
    <div className='ChallengeCertifyPage'>
      <Main status='challenge'></Main>
      <div className='challengeCertifyWrap'>
        <ChallengeTitleUI time={15} 
                          detail='한 달 동안 매일 30분씩 독서하는 습관 만들기' 
                          date='2022.02.04 ~ 2022.03.04'>
        </ChallengeTitleUI>
        <div className='challengeCertifyDayUIWrap'>
          {db.certify.map((value)=>
            <ChallengeDayUI
              key={value.id} 
              time={value.time}
              success='SUCCESS'
              img={`./days/day${value.day}.png`}
              content={value.description}
              day={value.day}
            >
            </ChallengeDayUI> 
          )}
        </div>
        <div className='challengeCertifyBtnWrap'>
          <div className='challengeCertifyBtn'>
            <div onClick={() => {
              navigate('/certifyWrite')
            }}>
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