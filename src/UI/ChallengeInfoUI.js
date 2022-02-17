import React, { useState, useEffect } from 'react';


const ChallengeInfoUI = (props) => { 
    const [condition, setCondition] = useState();
    const [duration, setDuration] = useState();
    const [doneTime, setDoneTime] = useState();
    const [participationCount, setParticipationCount] = useState();
    const [maxParticipation, setMaxParticipation] = useState();
    
    useEffect(() => {
        setCondition(props.condition)
        setDuration(props.duration);
        setDoneTime(props.doneTime);
        setParticipationCount(props.participationCount);
        setMaxParticipation(props.maxParticipation);
    }, [props.duration, props.doneTime, props.participationCount, props.maxParticipation, props.condition])

    return (
        <div className='ChallengeInfoUI'>
            <h1 className='challengeInfoTitle'>챌린지 info</h1>
            <div className='challengeInfoContent'>
                <table>
                    <tbody>
                        <tr>
                            <td className='challengeInfoCategory'>조건</td>
                            <td className='challengeInfoContent'>{condition}</td>
                        </tr>
                        <tr>
                            <td className='challengeInfoCategory'>상세 설명</td>
                            <td className='challengeInfoContent'>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 
                                우리나라 만세 무궁화 삼천리 화려강산
                                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 
                                우리나라 만세 무궁화 삼천리 화려강산
                                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 
                                우리나라 만세 무궁화 삼천리 화려강산</td>
                        </tr>
                        <tr>
                            <td className='challengeInfoCategory'>기간</td>
                            <td className='challengeInfoContent'>{duration}</td>
                        </tr>
                        <tr>
                            <td className='challengeInfoCategory'>달성 시간</td>
                            <td className='challengeInfoContent'>{doneTime}hr</td>
                        </tr>
                        <tr>
                            <td className='challengeInfoCategory'>참가 인원</td>
                            <td className='challengeInfoContent'>{participationCount} / {maxParticipation}</td>
                        </tr>
                        <tr>
                            <td className='challengeInfoCategory'>태그</td>
                        </tr>
                        {/* list 만들어서 찍기 */}
                        <tr>
                            <td className='challengeInfoContent'>#태그</td>
                        </tr>
                    </tbody>
                </table>
                <div className='challengeInfoTags'></div>
            </div>
        </div>
  );
};

export default ChallengeInfoUI;