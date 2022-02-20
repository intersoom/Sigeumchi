import '../src/css/main.css'
import { useNavigate } from 'react-router-dom';



const Main = (props) => { 
  const navigate = useNavigate();
  let style = {};
  if (props.status === 'challenge'){
    style = {
      width: '60px', height: '3px',
        borderRadius: '1.5px',
        backgroundColor: 'black',
        marginTop: '-2px',
        marginLeft: '71px'
    }
  }
  else if (props.status === 'sigeumchi'){
    style = {
      width: '60px', height: '3px',
        borderRadius: '1.5px',
        backgroundColor: 'black',
        marginTop: '-2px',
        marginLeft: '7px'
    }
  }
  
  return (
    <div className='Main'>
        <div className='mainBtnWrap'>
            <button className="mainBtn" onClick={() => {
            navigate('/')}}>시금치</button>
            <button className="mainBtn" onClick={() => {
            navigate('/challenge')}}>챌린지</button>
        </div>
        <div>
            <div className='mainBar'></div>
            <div className='mainSelectedBar' style={style}></div>
        </div>
    </div>
  );
};

export default Main;