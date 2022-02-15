import { useState, useEffect } from "react";

const CompletionBar = (props) => { 
  const [complete, setComplete] = useState(0);
  const [work, setWork] = useState(0);
  const [percent, setPercent] = useState(0);
  const [completeWidth, setCompleteWidth] = useState(0);

  useEffect(() => {
    setWork(props.work);
    setComplete(props.complete);
    
    const width = document.querySelector('.completeBar').offsetWidth;
    setCompleteWidth(width);
  }, [props.complete, props.work])

  useEffect(()=>{
    if (work <= complete){
      setPercent((work / complete) * completeWidth);
    }
    else{
      setPercent(completeWidth);
    }
  }, [complete, work, completeWidth, percent])  
    
  return (
    <div className='CompletionBar'>
        <div className="completeBar"></div>
        <div className="workingBar" style={{
          height: '9px',
          width: `${percent}px`,
          backgroundColor: '#BFD288',
          borderRadius: '14px',
          marginTop: '-9px'
        }}></div>
    </div>
  );
};

export default CompletionBar;