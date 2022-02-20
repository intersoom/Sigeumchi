import React, { useState, useEffect } from 'react';


const ChallengeInfoUI = (props) => { 
    const [condition, setCondition] = useState();
    const [duration, setDuration] = useState();
    const [detail, setDetail] = useState();
    const [doneTime, setDoneTime] = useState();
    const [participationCount, setParticipationCount] = useState();
    const [maxParticipation, setMaxParticipation] = useState();
    
    useEffect(() => {
        setCondition(props.condition)
        setDuration(props.duration);
        setDoneTime(props.doneTime);
        setDetail(props.description);
        setParticipationCount(props.participationCount);
        setMaxParticipation(props.maxParticipation);
    }, [props.duration, props.doneTime, props.participationCount, props.maxParticipation, props.condition, props.description])

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
                            <td className='challengeInfoContent'>{detail}</td>
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