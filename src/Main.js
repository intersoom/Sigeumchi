import '../src/css/main.css'

const Main = (props) => { 
  return (
    <div className='Main'>
        <div className='mainBtnWrap'>
            <button className="mainBtn">시금치</button>
            <button className="mainBtn">챌린지</button>
        </div>
        <div>
            <div className='mainBar'></div>
            <div className='mainSelectedBar'></div>
        </div>
    </div>
  );
};

export default Main;