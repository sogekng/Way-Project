import React from 'react'
import logo from '../logo.svg';


const button = {
    button: <div className="switch__container">
              <input id="switch-shadow" class="switch switch--shadow" type="checkbox" />
              <label for="switch-shadow"></label>
          </div>
}

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
            <div className='bloco0'><a href='#logo'><img src={logo} alt="logo" /></a></div>
            <div className='bloco1'><a href='#home'>HOME</a></div>
            <div className='bloco2'><a href='#sobre'>SOBRE NÓS</a></div>
            <div className='bloco3'><a href='#o_que_somos'>O QUE SOMOS</a></div>
            <div className='bloco4'><a href='#o_que_oferecemos'>O QUE OFERECEMOS</a></div>
            <div className='bloco5'>{button.button}</div>
            </div>
      </header>
    )
}

export default Header