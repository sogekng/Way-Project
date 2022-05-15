import React from 'react'
import Typing from 'react-typing-animation';
import Carousel from './Carousel';

const contents = {
    text_one: <p>{'Programação'}</p>,
    text_two: <p>{'Design'}</p>,
    text_three: <Typing speed={70}><h1>Lorem alguma coisa texto texto texto<Typing.Speed ms={400} /></h1></Typing>,
    img_one: <img src='../contents/imgs/img001.png' alt='bruh'></img>,
    img_two: <img src='../contents/imgs/img002.png' alt='bruh'></img>
  }

const Content = () => {
    return (
        <div className='content'>
            <div className='img_content'> 
                <Carousel />
            </div>
            <div className='text_content'>
                {contents.text_three}
            </div>
            <div className='img_content'>
                <Carousel />
            </div>
        </div> 
    )
}

export default Content