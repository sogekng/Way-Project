import logo from './logo.svg';
import './App.css';
import React from 'react';
import Typing from 'react-typing-animation';


const contents = {
  button: <div className="switch__container">
              <input id="switch-shadow" class="switch switch--shadow" type="checkbox" />
              <label for="switch-shadow"></label>
          </div>,
  text_one: <p>{'Programação'}</p>,
  text_two: <p>{'Design'}</p>,
  text_three: <Typing speed={70}><h1>Lorem alguma coisa texto texto<Typing.Speed ms={200} /></h1></Typing>,
  img_one: <img src='../contents/imgs/img001.png' alt='bruh'></img>,
  img_two: <img src='../contents/imgs/img002.png' alt='bruh'></img>
}

function App() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='bloco0'><img src={logo} alt="logo" /></div>
          <div className='bloco1'><a href='#home'>HOME</a></div>
          <div className='bloco2'><a href='#sobre'>SOBRE NÓS</a></div>
          <div className='bloco3'><a href='#o_que_somos'>O QUE SOMOS</a></div>
          <div className='bloco4'><a href='#o_que_oferecemos'>O QUE OFERECEMOS</a></div>
          <div className='bloco5'>{contents.button}</div>
        </div>
      </header>
      
      <div className='content'>
        <div className='img_content'> 
            {contents.text_two}
        </div>
          <div className='text_content'>
              {contents.text_three}
          </div>
        <div className='img_content'>
            {contents.text_one}
        </div>
      </div>
      <div className='navigator'>
        <div className='nav_content'>
        </div>
      </div>
    </>
  );
}

export default App;
