import { useNavigate } from 'react-router-dom';

const ChallengeSumitDone = (props) => { 
  const navigate = useNavigate();

  return (
    <div className='ChallengeSumitDone'>
        <div className="challengeSumitDoneCon">
            <img src="./sigeumchi.png" alt="이미지를 찾을 수 없습니다."></img>
            <h1>챌린지 신청이 완료되었습니다 😄</h1>
            <p>포기하지 않고 끝까지 성공해서</p>
            <p>시금치를 키워봐요!</p>
        </div>
        <button className="challengeSubmitYes" onClick={() => {
            navigate(-2)}}>넹 :)</button>
    </div>
  );
};

export default ChallengeSumitDone;