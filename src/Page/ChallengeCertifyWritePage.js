import Main from '../Main'
import ChallengeDayUI from '../UI/ChallengeDayUI'
import ChallengeTitleUI from '../UI/ChallengeTitleUI'
import db from '../constant/db.json'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ChallengeCertifyWritePage = (props) => { 
    const navigate = useNavigate();

    
    const [day, setDay] = useState()
    const [description, setDescription] = useState()
    const [time, setTime] = useState()

    const onChangeDay = (e) => {
        const { name, value } = e.target;

        setDay(value);
    }

    const onChangeDes = (e) => {
        const { name, value } = e.target;

        setDay(value);
    }

    const onChangeTime = (e) => {
        const { name, value } = e.target;
        
        setDay(value);
        console.log(day);
    }
  // hooks 사용
  // document.querySelector('.ChallengeSumitDone').style.display = 'none';
  return (
    <div className='ChallengeCertifyWritePage'>
        <Main status='challenge'></Main>
        <div className='inputTitleWrap'>
            <ChallengeTitleUI time={15} 
                            detail='한 달 동안 매일 30분씩 독서하는 습관 만들기' 
                            date='2022.02.04 ~ 2022.03.04'>
            </ChallengeTitleUI>
            <div className='inputAllWrap'>
                <div className='inputWrap'>
                    <p>Day</p>
                    <input className='day' name='day' placeholder='몇 일차인지 입력해주세요 :)' onChange={onChangeDay}></input>
                </div>
                <div className='inputWrap'>
                    <p>상세 설명</p>
                    <input className='description' placeholder='상세 설명을 입력해주세요 :)' onChange={onChangeDes}></input>
                </div>
                <div className='inputWrap'>
                    <p>시간</p>
                    <input className='time' placeholder='몇 분 챌린지에 도전했는지 입력해주세요 :)' onChange={onChangeTime}></input>
                </div>
            </div>
            <button className="writeSubmit" onClick={() => {
                console.log(db.certify)
                db.certify.concat({"id": 8, "time":{time}, "day":{day}, "description":{description}})
                navigate(-1)}}>등록하기</button>
        </div>
    </div>
  );
};

export default ChallengeCertifyWritePage;