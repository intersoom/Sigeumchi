import '../src/css/main.css'
const main = () => { 
  return (
    <div className='Main'>
        <div>
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

export default main;